// JavaScript for Admin Dashboard

// Mock data and functionality for demonstration purposes
const dashboardFunctions = {
    ViewBillreceipts: () => {
      alert("Redirecting to Add Member page...");
      // Replace with actual navigation or logic
      window.location.href = "/add-member";
    },
    ViewBillNotifications: () => {
      alert("Redirecting to Update/Delete Member page...");
      window.location.href = "/update-delete-member";
    },
    
    };
    
  
  
  // Function to attach event listeners to dashboard items
  function setupDashboardEvents() {
    // Attach event listeners
    document.querySelectorAll(".dashboard-item").forEach((item) => {
      const action = item.querySelector("p").innerText.trim().toLowerCase().replace(/ /g, "");
      item.addEventListener("click", () => {
        if (dashboardFunctions[action]) {
          dashboardFunctions[action]();
        } else {
          alert("Feature not implemented yet.");
        }
      });
    });
  }
  
  // On DOM Content Loaded
  document.addEventListener("DOMContentLoaded", () => {
    setupDashboardEvents();
  
    // Example: Display dynamic greetings
    const headerMessage = document.querySelector(".dashboard-header p");
    const hours = new Date().getHours();
    const greeting =
      hours < 12
        ? "Good Morning, Member!"
        : hours < 18
        ? "Good Afternoon, Member!"
        : "Good Evening, Member!";
    headerMessage.innerText = greeting;
  });
  