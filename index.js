

var lettersArray = ["!", "@", "#", "$", "%", "^", "&", "_", "-", "=", "+", " "];

// Generate letters (A-Z)

for (let i = 65; i <= 90; i++) {
    lettersArray.push(String.fromCharCode(i));
}

// Generate letters (a-z)

for (let i = 97; i <= 122; i++) {
    lettersArray.push(String.fromCharCode(i));
}

// Generate numbers (0-9)

for (let i = 0; i <= 9; i++) {
    lettersArray.push(i.toString());  // Convert numbers to strings before pushing
}

// Function to generate a random index from lettersArray
function randomGenerator() {
    return Math.floor(Math.random() * lettersArray.length);
}

// Function to generate a random password
function randomPassword(lengthOfPassword) {
    var passwordGenerated = "";
    for (let i = 0; i < lengthOfPassword; i++) {
        passwordGenerated += lettersArray[randomGenerator()];
    }
    return passwordGenerated;
}

// Event listener for the "Generate" button
document.querySelector("button").addEventListener("click", function(){
    var lengthOfPassword = Number(document.getElementById("number").value);

    // Validate if lengthOfPassword is a valid number and greater than 0
    if (lengthOfPassword >= 12) {
        document.querySelector("#display").value = randomPassword(lengthOfPassword);
    } else {
        document.querySelector("#display").value = "For a secure password the least length of a password is 12";
        document.querySelector("#display").value = randomPassword(15);
        document.querySelector("input").style.display= "none";
    }
});
