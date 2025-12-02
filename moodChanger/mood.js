//Katie Greenwood, 12.2.25

const moodDisplay = document.querySelector("#moodDisplay");

const moods = {
    happy: {bg: '#dd3e16', text: '#2c91e4', message: 'Warm smiles and the suns kisses!'},
    calm: {bg: "#A1DBF0", text: "#105069", message: "Zzzzzzz...."},
    excited: {bg: "#F0E965", text: "#ED7105", message: "Yippee! Yay! Yahoo!!"},
    chill: {bg: "#69BF8A", text: "#046328", message: "You're literally just a chill guy."},
    mysterious: {bg: "#2C2B2E", text: "#F6F5F7", message: "Wouldn't you like to know, weather boy..."}
};

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("mood-btn")){
        const mood = event.target.getAttribute("data-mood");
        const moodSettings = moods[mood];
        document.body.style.backgroundColor = moodSettings.bg;
        document.body.style.color = moodSettings.text;
        moodDisplay.textContent = moodSettings.message;
    }
})