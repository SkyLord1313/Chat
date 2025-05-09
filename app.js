// Your Firebase config with databaseURL included
const firebaseConfig = {
  apiKey: "AIzaSyAoadcdknzCOo4yg2fq1C_aaH6OPVuV2QI",
  authDomain: "chat-app-1313.firebaseapp.com",
  databaseURL: "https://chat-app-1313-default-rtdb.firebaseio.com",
  projectId: "chat-app-1313",
  storageBucket: "chat-app-1313.firebasestorage.app",
  messagingSenderId: "835197286965",
  appId: "1:835197286965:web:75f8e9ebe8dce51a5f0f7c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// DOM elements
const messagesDiv = document.getElementById("messages");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

// Listen for new messages
db.ref("messages").on("child_added", (snapshot) => {
  const msg = snapshot.val();
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.textContent = msg.text;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Send message
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (text !== "") {
    db.ref("messages").push({ text });
    messageInput.value = "";
  }
});
