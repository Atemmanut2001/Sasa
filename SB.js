function checkAnswer() {
    var answerInput = document.getElementById("answer");
    var messageElement = document.getElementById("message");
    var button = document.querySelector("button");

    // Check if required elements are found
    if (!answerInput || !messageElement || !button) {
        console.error("Required HTML elements not found.");
        return;
    }

    var answer = answerInput.value.toLowerCase();

    if (answer === "sunday") {
        // Provide immediate feedback by changing button text
        button.innerHTML = "Redirecting...";
        console.log("Redirecting...");

        // Add a class to change button color
        button.classList.add("redirecting");

        // Delay the redirection slightly to allow feedback to be visible
        setTimeout(function() {
            console.log("Redirecting to Sasa.html...");
            window.location.href = "Sasa.html";
        }, 500); // Redirect after 500 milliseconds (0.5 seconds)
    } else {
        // Display error message
        messageElement.innerHTML = "Incorrect answer. Please try again.";
        console.log("Incorrect answer. Please try again.");
    }
}



