// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const signupForm = document.querySelector("form");
  
    // Handle form submission
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the input values from the form
      const username = signupForm.new_uname.value.trim();
      const password = signupForm.new_psw.value.trim();
      const role = signupForm.role.value;
  
      // Validate the inputs
      if (!username || !password || !role) {
        alert("All fields are required!");
        return;
      }
  
      // Save the user account details to localStorage
      const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve existing users or initialize an empty array
      const isUserExists = users.some((user) => user.username === username);
  
      if (isUserExists) {
        alert("Username already exists. Please choose a different username.");
        return;
      }
  
      // Add the new user
      users.push({ username, password, role });
      localStorage.setItem("users", JSON.stringify(users)); // Save to localStorage
  
      // Show success message
      alert("Account created successfully! Please log in.");
  
      // Redirect to the login page
      window.location.href = "index.html";
    });
  });
  