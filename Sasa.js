// Array of image names
const imageNames = [
    "SB1.jpg", "SB2.jpg", "SB3.jpg", "SB4.jpg", "SB5.jpg", 
    "SB6.jpg", "SB7.jpg", "SB8.jpg", "SB9.jpg", "SB10.jpg", 
    "SB11.jpg", "SB12.jpg", "SB13.jpg", "SB14.jpg", "SB15.jpg", 
    "SB16.jpg", "SB17.jpg", "SB18.jpg", "SB19.jpg", "SB20.jpg", 
    "SB21.jpg", "SB22.jpg", "SB23.jpg", "SB24.jpg", "SB25.jpg",
    "SB26.jpg", "SB27.jpg", "SB28.jpg", "SB29.jpg", "SB30.jpg",
    "SB31.jpg", "SB32.jpg", "SB33.jpg", "SB34.jpg", "SB35.jpg",
    "SB36.jpg", "SB37.jpg", "SB38.jpg", "SB39.jpg", "SB40.jpg",
    "SB41.jpg", "SB42.jpg", "SB43.jpg", "SB44.jpg", "SB45.jpg",
    "SB46.jpg", "SB47.jpg", "SB48.jpg", "SB49.jpg", "SB50.jpg",
    "SB51.jpg", "SB52.jpg", "SB53.jpg", "SB54.jpg", "SB55.jpg",
    "SB56.jpg", "SB57.jpg", "SB58.jpg", "SB59.jpg", "SB60.jpg",
    "SB61.jpg", "SB62.jpg", "SB63.jpg"
];

// List of captions
const captions = [
    "The most beautiful girl I know 🫠", "Most intelligent 🧠", "Short, so therefore cute 🙃", 
    "Religious, we love a girl who loves God", "Very kind", "Polite (even though you can get very rude when you're upset)", 
    "Empathetic", "Considerate", "Compassionate 🩵", "Dresses nicely, always eye catching (even breath taking)", 
    "Has many hobbies", "Very good at math (I want my wife to teach our kids math)", "Very ambitious and goal driven (the future is very bright for you)", 
    "Best conversationalist I know", "I love the cute little gap between your lower teeth", 
    "Doesn't care for other people's opinions", "Can't be peer pressured or lead astray from your values and beliefs", 
    "Once again I’ll emphasize that you’re beautiful", "Once again I'll emphasize that you're CUTE and SMART", 
    "Cute Almond shaped eyes 👀", "Nice lips (I wanna kiss them) 😗", "Can draw clothes and literally stitch them together", 
    "Loves her family and takes care of her brother (that's very attractive)", 
    "Very good at cooking 👩🏿‍🍳", "Very responsible", "Hygienic", "You smell GOOD (I think you prolly taste good too) 🫢", 
    "Very photogenic 📸", "Academic leader 🫡🧠", "Haboba, but young-spirit 👵🏾", "Trustworthy (75%) 🙂", 
    "Reliable 🫂", "Bisexual 💀", "Doesn't hold grudges", "Respectful", "Irresistible 😗", 
    "Elegant 🌹", "Funny", "Thoughtful", "Always takes initiative", "Magnetic", "Unique", 
    "Confident", "Playful", "Humble 🤔", "Creative", "Devoted", "Innocent 👼🏾", 
    "Peaceful 💐", "Honest", "Supportive", "Captivating", "Gentle", "Forgiving", 
    "Sincere", "Gorgeous", "Kind", "Strong 💪🏾", "Always has the best hairstyle", 
    "Enlightened 🧘🏾‍♀️", "Resourceful", "Timely", "Curious to learn"
];

// Function to create polaroid gallery
function createPolaroidGallery() {
    const gallery = document.getElementById("polaroid-gallery");

    // Check if gallery element exists
    if (!gallery) {
        console.error("Gallery element not found.");
        return;
    }

    // Assign a random caption to each image
    const shuffledCaptions = captions.slice().sort(() => 0.5 - Math.random());

    // Loop through image names and create polaroid elements
    imageNames.forEach((imageName, index) => {
        const polaroid = document.createElement("div");
        polaroid.classList.add("polaroid");

        const image = document.createElement("img");
        image.src = imageName;
        image.alt = "Polaroid " + (index + 1);
        image.classList.add("polaroid-image");

        const caption = document.createElement("p");
        caption.classList.add("caption");
        caption.innerHTML = shuffledCaptions[index];  // Assign caption to each image

        polaroid.appendChild(image);
        polaroid.appendChild(caption);
        gallery.appendChild(polaroid);

        console.log(`Image: ${imageName}, Caption: ${shuffledCaptions[index]}`);
    });
}

// Create polaroid gallery when page loads
window.onload = createPolaroidGallery;


