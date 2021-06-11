// Init Github
const github = new Github();
// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const input = e.target.value;

  if (input !== "") {
    github.getUser(input).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not find", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
