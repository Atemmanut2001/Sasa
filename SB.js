function checkAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();

//Replace "sunday" with the correct answer
if(answer === "sunday") {
    window.location.href = "Sasa.html";
} else {
    document.getElementById("message").innerHTML = "Inocrrect answer. PLease try again.";
}
}