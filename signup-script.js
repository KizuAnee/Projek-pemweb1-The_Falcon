import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCw0JQnVmwhXC_HrPk1lXja3iNs5tDA1Mk",
  authDomain: "projek-pemweb-538e2.firebaseapp.com",
  databaseURL: "https://projek-pemweb-538e2-default-rtdb.firebaseio.com",
  projectId: "projek-pemweb-538e2",
  storageBucket: "projek-pemweb-538e2.appspot.com",
  messagingSenderId: "938803551824",
  appId: "1:938803551824:web:43b89766ae169579527b55",
  measurementId: "G-Z4P78BMM2X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

window.signup = function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;
  var confirmPassword = document.getElementById("confirmPwd").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  sessionStorage.setItem("username", username);

  set(ref(db, 'users/' + username.replace('.', '_')), {
    username: username,
    password: password,
    created_at: new Date().toISOString()
  })
    .then(() => {
      alert("User registered successfully.");
      window.location.href = "dataInput.html";
    })
    .catch((error) => {
      alert("Failed to register user: " + error.message);
    });
}