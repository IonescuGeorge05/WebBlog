let questions = [
    {
        question: "Do you feel happy?",
        options: { a: "Yes", b: "No" },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    {
        question: "Do you like pizza?",
        options: { a: "Yes", b: "No" },
        correctAnswer: "a",
        correctResponse: "Nice, me too!",
        incorrectResponse: "That's okay!"
    },
    {
        question: "Is JavaScript fun?",
        options: { a: "Yes", b: "No" },
        correctAnswer: "a",
        correctResponse: "Glad you think so!",
        incorrectResponse: "Maybe you'll grow to like it!"
    }
];

let currentQuestionIndex = 0;
const chatContainer = document.getElementById("chat-container");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let optionsText = Object.keys(currentQuestion.options)
        .map(key => `${key}. ${currentQuestion.options[key]}`)
        .join(' | ');

    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.innerHTML = `<strong>Bot:</strong> ${currentQuestion.question}<br><small>${optionsText}</small>`;
    chatContainer.appendChild(botMessage);
    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let userResponse = userInput.value.trim().toLowerCase();
    if (userResponse === "") return;

    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);

    let currentQuestion = questions[currentQuestionIndex];
    let botReply = document.createElement("div");
    botReply.classList.add("message");
    botReply.innerHTML = `<strong>Bot:</strong> `;

    if (userResponse === currentQuestion.correctAnswer) {
        botReply.innerHTML += currentQuestion.correctResponse;
    } else {
        botReply.innerHTML += currentQuestion.incorrectResponse;
    }

    chatContainer.appendChild(botReply);

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    scrollChatContainerToBottom();

    setTimeout(displayQuestion, 1000);
});

displayQuestion();
