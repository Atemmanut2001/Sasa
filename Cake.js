let scene, camera, renderer, cake, candle, flames = [];
let audioContext = null; // Declare AudioContext variable globally

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function () {
    init();
    animate();
});

function init() {
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(3, 4, 5); // Adjusting the camera to show both the top and front of the cake
    camera.lookAt(0, 1, 0);

    // Check if the cake-container exists
    const cakeContainer = document.getElementById('cake-container');
    if (!cakeContainer) {
        console.error('Cake container element not found');
        return;
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    cakeContainer.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Create the cake
    const cakeGeometry = new THREE.CylinderGeometry(2, 2, 1, 32);
    const cakeMaterial = new THREE.MeshPhongMaterial({ color: 0x553c13 });
    cake = new THREE.Mesh(cakeGeometry, cakeMaterial);
    scene.add(cake);

    const icingGeometry = new THREE.CylinderGeometry(2.1, 2.1, 0.3, 32);
    const icingMaterial = new THREE.MeshPhongMaterial({ color: 0xf0e44d });
    const icing = new THREE.Mesh(icingGeometry, icingMaterial);
    icing.position.y = 0.65;
    scene.add(icing);

    // Create the candles
    const candleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 32);
    const candleMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    for (let i = -0.5; i <= 0.5; i += 1) {
        candle = new THREE.Mesh(candleGeometry, candleMaterial);
        candle.position.set(i, 1.15, 0);
        scene.add(candle);

        // Create the flames
        let flame = createFlame();
        flame.position.set(i, 1.65, 0);
        flames.push(flame);
        scene.add(flame);
    }

    // Check for AudioContext support
    if (window.AudioContext || window.webkitAudioContext) {
        // Wait for user gesture to start audio
        document.getElementById('startButton').addEventListener('click', startAudio);
    } else {
        console.error('Web Audio API not supported'); // Handle lack of support
    }
}

function createFlame() {
    const geometry = new THREE.ConeGeometry(0.05, 0.2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff4500 });
    return new THREE.Mesh(geometry, material);
}

function startAudio() {
    // Audio setup
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const listener = audioContext.listener;

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const source = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            source.connect(analyser);
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            function getAudioData() {
                analyser.getByteTimeDomainData(dataArray);
                let max = 0;
                for (let i = 0; i < bufferLength; i++) {
                    if (dataArray[i] > max) {
                        max = dataArray[i];
                    }
                }
                return max / 128 - 1.0;
            }

            function checkBlowOut() {
                const volume = getAudioData();
                console.log('Volume: ', volume); // Debugging information
                if (volume > 0.5) {
                    flames.forEach(flame => flame.visible = false);
                    setTimeout(() => {
                        window.location.href = "Credit.html";
                    }, 1000);
                }
                requestAnimationFrame(checkBlowOut);
            }
            checkBlowOut();
        })
        .catch(err => console.error('Error accessing microphone: ', err));
}

function animate() {
    requestAnimationFrame(animate);

    flames.forEach(flame => {
        flame.rotation.y += 0.02;
        flame.position.y += Math.sin(flame.rotation.y * 10) * 0.01;
    });

    renderer.render(scene, camera);
}
