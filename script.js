const chatBox = document.querySelector('.chat-box');
const chatInput = document.querySelector('.chat-input input');
const chatButton = document.querySelector('.chat-input button');

function sendMessage() {
  const message = chatInput.value;
  if (message.trim() === '') {
    return;
  }
  chatBox.innerHTML += `
    <div class="chat-message user">
      <p>${message}</p>
    </div>
  `;
  chatInput.value = '';
  getResponse(message);
}

function getResponse(message) {
  // Use an API to retrieve a response based on the user's input
  // In this example, we will use a simple switch statement to generate a random response
  const responses = [
    "Hello!",
    "How can I help you today?",
    "Sorry, I don't understand. Can you please rephrase your question?",
    "I'm not sure, but I'll try to find out.",
    "Thank you for your question!"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  chatBox.innerHTML += `
    <div class="chat-message bot">
      <p>${response}</p>
    </div>
  `;
}

chatButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
