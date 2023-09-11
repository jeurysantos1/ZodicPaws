// Define the dictionary of zodiac sign preferences
const zodiacPreferences = {
    Aries: "German Shepherd",
    Taurus: "Bulldog",
    Gemini: "Border Collie",
    Cancer: "Cocker Spaniel",
    Leo: "Golden Retriever",
    Virgo: "Labrador Retriever",
    Libra: "Cavalier King Charles Spaniel",
    Scorpio: "French Bulldog",
    Sagittarius: "Siberian Husky",
    Capricorn: "Rottweiler",
    Aquarius: "Poodle",
    Pisces: "Bichon Frise",
};

document.addEventListener("DOMContentLoaded", function () {
    const zodiacInput = document.querySelector(".zodiacInput");
    const seeMyMatchButton = document.querySelector(".seeMyMatchButton");
    const seeMyMatchButtonText = document.querySelector(".SeeMyMatch");

    // Function to enable or disable the button based on input
    function toggleButtonState() {
        if (zodiacInput.value.trim() !== "") {
            seeMyMatchButton.style.background = "#000"; // Change the button color
            seeMyMatchButtonText.style.color= "white";
            seeMyMatchButton.disabled = false; // Enable the button
        } else {
            seeMyMatchButton.style.background = "rgba(144, 249, 255, 0.24)"; // Restore the original button color
            seeMyMatchButton.disabled = true; // Disable the button
        }
    }

    function handleButtonStateClick() {
        const userInput = zodiacInput.value.trim(); // Get the user's input
        const matchedBreed = zodiacPreferences[userInput]; // Look up the breed for the user's input

        if (matchedBreed) {
            // Check if a matching breed is found
            // Redirect to the third screen with the matched breed as a query parameter
            window.location.href = `./third-scree.html?breed=${matchedBreed}`;
        } else {
            alert("No matching pet breed found for your zodiac sign."); // No matching breed found
        }
    }

    // Listen to input changes
    zodiacInput.addEventListener("input", toggleButtonState);

    // Listen to button click
    seeMyMatchButton.addEventListener("click", handleButtonStateClick);

    // Initial button state
    toggleButtonState();
});
