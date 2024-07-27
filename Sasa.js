// Sasa.js

// Array of image names
const imageNames = [
    "SB1.jpg", "SB2.jpg", "SB3.jpg", "SB4.jpg", "SB5.jpg", 
    "SB6.jpg", "SB7.jpg", "SB8.jpg", "SB9.jpg", "SB10.jpg", 
    "SB11.jpg", "SB12.jpg", "SB13.jpg", "SB14.jpg", "SB15.jpg", 
    "SB16.jpg", "SB17.jpg", "SB18.jpg", "SB19.jpg", "SB20.jpg", 
    "SB21.jpg", "SB22.jpg", "SB23.jpg", "SB24.jpg", "SB25.jpg",
    "SB27.jpg", "SB28.jpg", "SB29.jpg", "SB30.jpg", "SB31.jpg",
    "SB32.jpg", "SB33.jpg", "SB34.jpg", "SB35.jpg", "SB36.jpg",
    "SB37.jpg", "SB38.jpg", "SB39.jpg", "SB40.jpg", "SB41.jpg",
    "SB42.jpg", "SB43.jpg", "SB44.jpg", "SB45.jpg", "SB46.jpg",
    "SB47.jpg", "SB48.jpg", "SB49.jpg", "SB50.jpg", "SB51.jpg",
    "SB52.jpg", "SB53.jpg", "SB54.jpg", "SB55.jpg", "SB56.jpg",
    "SB57.jpg", "SB58.jpg", "SB59.jpg"
];

// Function to create polaroid gallery
function createPolaroidGallery() {
    const gallery = document.getElementById("polaroid-gallery");

    // Check if gallery element exists
    if (!gallery) {
        console.error("Gallery element not found.");
        return;
    }

    // Loop through image names and create polaroid elements
    imageNames.forEach((imageName, index) => {
        const polaroid = document.createElement("div");
        polaroid.classList.add("polaroid");

        const image = document.createElement("img");
        image.src = imageName;
        image.alt = "Polaroid " + (index + 1);
        image.classList.add("polaroid-image");

        polaroid.appendChild(image);
        gallery.appendChild(polaroid);
    });
}

// Create polaroid gallery when page loads
window.onload = createPolaroidGallery;


