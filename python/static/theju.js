// Get HTML Elements
const languageElement = document.getElementById("language");
const messageElement = document.getElementById("message");
const counterElement = document.getElementById("counter");

const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const floatingHearts = document.getElementById("floatingHearts");

// Store Language Messages
let languages = [];
let currentIndex = 0;

// Display Message
function showMessage() {
    if (languages.length === 0) {
        languageElement.textContent = "Loading...";
        messageElement.textContent = "Please wait ❤️";
        counterElement.textContent = "";
        previousButton.disabled = true;
        nextButton.disabled = true;
        return;
    }

    const current = languages[currentIndex];

    languageElement.textContent = current.language;
    messageElement.textContent = current.message;

    counterElement.textContent =
        `${currentIndex + 1} / ${languages.length}`;

    previousButton.disabled = currentIndex === 0;

    nextButton.disabled =
        currentIndex === languages.length - 1;
}

// Load Messages from Flask
async function loadMessages() {
    try {
        languageElement.textContent = "Loading...";
        messageElement.textContent = "Loading love messages ❤️";

        const response = await fetch("/messages");

        if (!response.ok) {
            throw new Error("Unable to load messages");
        }

        languages = await response.json();

        if (!Array.isArray(languages) || languages.length === 0) {
            throw new Error("No messages found");
        }

        currentIndex = 0;
        showMessage();

    } catch (error) {
        languageElement.textContent = "Oops!";

        messageElement.textContent =
            "Unable to load messages. Please restart the server.";

        counterElement.textContent = "";

        previousButton.disabled = true;
        nextButton.disabled = true;

        console.error(error);
    }
}

// Next Language
nextButton.addEventListener("click", function () {
    if (currentIndex < languages.length - 1) {
        currentIndex++;
        showMessage();
    }
});

// Previous Language
previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        showMessage();
    }
});

// Create Floating Hearts
function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.floor(Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        Math.floor(Math.random() * 5 + 5) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 10000);
}

// Start Floating Heart Animation
setInterval(createFloatingHeart, 500);

// Load the website messages
loadMessages();