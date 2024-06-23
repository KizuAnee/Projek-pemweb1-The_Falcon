import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

window.login = async function () {
  let username = document.getElementById('username').value;
  let password = document.getElementById('pwd').value;

  try {
    const db = getDatabase(app);
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, `users/${username.replace(/[.$\[\]#\/]/g, ',')}`));

    if (snapshot.exists() && snapshot.val().password === password) {
      sessionStorage.setItem('username', username);
      alert('Login successful');
      window.location.href = 'landing_page.html';
    } else {
      alert('Invalid username or password');
    }
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
}