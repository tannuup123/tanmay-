// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg0AXkfC2sMH7raAkIGtZy5uvqmqRqZ_8",
  authDomain: "gym-managment-system-8881f.firebaseapp.com",
  databaseURL: "https://gym-managment-system-8881f-default-rtdb.firebaseio.com",
  projectId: "gym-managment-system-8881f",
  storageBucket: "gym-managment-system-8881f.firebaseapp.com",
  messagingSenderId: "667772224159",
  appId: "1:667772224159:web:72378a18f0bf923bcbd8aa",
};

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Toggle password visibility
function togglePassword() {
  const password = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  if (password && eyeIcon) {
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.className = "fa fa-eye-slash";
    } else {
      password.type = "password";
      eyeIcon.className = "fa fa-eye";
    }
  } else {
    console.error("Password field or eye icon not found!");
  }
}

// Login functionality
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  if (loginBtn) {
    loginBtn.addEventListener("click", async (event) => {
      event.preventDefault();

      // Get input values
      const username = document.querySelector('input[name="uname"]').value;
      const password = document.querySelector('input[name="password"]').value;
      const role = document.querySelector('select[name="role"]').value;

      try {
        // Firebase Authentication
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;

        // Fetch user data from Realtime Database
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, `users/${user.uid}`));

        if (snapshot.exists()) {
          const userCredential = snapshot.val();

          // Check if the role matches
          if (userCredential.role === role) {
            // Redirect based on role
            if (role === "admin") {
              window.location.href = "admin_dashboard.html";
            } else if (role === "member") {
              window.location.href = "member_dashboard.html";
            } else if (role === "user") {
              window.location.href = "user_dashboard.html";
            }
          } else {
            alert("Role mismatch. Please select the correct role.");
          }
        } else {
          alert("User data not found in the database.");
        }
      } catch (error) {
        // Handle errors
        alert(`Login error: ${error.message}`);
      }
    });
  }
});
