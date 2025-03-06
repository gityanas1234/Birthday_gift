// Set the date we're counting down to
const birthdayDate = new Date("June 24, 2025 00:00:00").getTime();

// Update the countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";

    // If the countdown is finished
    if (distance < 0) {
        document.getElementById("message").innerHTML = "<p>Happy Birthday, My Love! Enjoy your day!</p>";
        clearInterval(countdownInterval);
    }
}

// Change message on click
function changeMessage() {
    const messages = [
        "You are the love of my life!",
        "Every moment with you is a blessing!",
        "I’m so lucky to have you by my side!",
        "Wishing you all the happiness in the world!",
        "My heart beats only for you!",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("message").innerHTML = `<p>${randomMessage}</p>`;
}

// Run the countdown
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display countdown immediately
