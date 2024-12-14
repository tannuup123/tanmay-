// JavaScript for Admin Dashboard

// Mock data and functionality for demonstration purposes
const dashboardFunctions = {
    addMember: () => {
      alert("Redirecting to Add Member page...");
      // Replace with actual navigation or logic
      window.location.href = "/add-member";
    },
    updateDeleteMember: () => {
      alert("Redirecting to Update/Delete Member page...");
      window.location.href = "/update-delete-member";
    },
    createBill: () => {
      alert("Redirecting to Create Bill page...");
      window.location.href = "/create-bill";
    },
    assignFeePackage: () => {
      alert("Redirecting to Assign Fee Package page...");
      window.location.href = "/assign-fee-package";
    },
    assignNotifications: () => {
      alert("Redirecting to Assign Notifications page...");
      window.location.href = "/assign-notifications";
    },
    reportExport: () => {
      alert("Generating Report for Export...");
      // Add logic to generate and download reports
      console.log("Report Exported Successfully!");
    },
    supplementStore: () => {
      alert("Redirecting to Supplement Store page...");
      window.location.href = "/supplement-store";
    },
    dietDetails: () => {
      alert("Redirecting to Diet Details page...");
      window.location.href = "/diet-details";
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
        ? "Good Morning, Admin!"
        : hours < 18
        ? "Good Afternoon, Admin!"
        : "Good Evening, Admin!";
    headerMessage.innerText = greeting;
  });
  