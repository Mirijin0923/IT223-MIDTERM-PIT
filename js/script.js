// Prompt user for their name and display a greeting
var username = prompt("Hi! What's your name?");

if (username && username.trim() !== "") {
  document.getElementById("greeting").textContent = "Welcome, " + username + "!";
}

// Toggle skill bars display and animation
document.getElementById("show-bars-btn").addEventListener("click", function() {
  var bars = document.getElementById("skill-bars");
  var showing = bars.style.display === "block";

  if (showing) {
    bars.style.display = "none";
    this.textContent = "Show Skill Levels";

    // Reset bar widths
    document.querySelectorAll(".fillbar").forEach(function(bar) {
      bar.style.width = "0%";
    });
  } else {
    bars.style.display = "block";
    this.textContent = "Hide Skill Levels";

    // Animate bar widths
    setTimeout(function() {
      document.querySelectorAll(".fillbar").forEach(function(bar) {
        bar.style.width = bar.dataset.width + "%";
      });
    }, 50);
  }
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  var valid = true;

  var nameField  = document.getElementById("contact_name");
  var emailField = document.getElementById("contact_email");
  var msgField   = document.getElementById("contact_message");

  // Hide previous error messages
  document.getElementById("error_name").style.display  = "none";
  document.getElementById("error_email").style.display = "none";
  document.getElementById("error_message").style.display = "none";
  document.getElementById("form-success").style.display = "none";

  // Validate name
  if (nameField.value.trim() === "") {
    document.getElementById("error_name").style.display = "block";
    valid = false;
  }

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    document.getElementById("error_email").style.display = "block";
    valid = false;
  }

  // Validate message
  if (msgField.value.trim() === "") {
    document.getElementById("error_message").style.display = "block";
    valid = false;
  }

  // Show success message if valid
  if (valid) {
    document.getElementById("form-success").style.display = "block";
    this.reset();
  }
});

// jQuery for dark mode toggle and project filters
$(document).ready(function() {

  // Dark mode toggle
  $("#dark-toggle").on("click", function() {
    $("body").toggleClass("dark");

    var isDark = $("body").hasClass("dark");

    if (isDark) {
      $(this).text("☀️");
    } else {
      $(this).text("🌙");
    }
  });

  // Project filter buttons
  $(".btn").on("click", function() {
    $(".btn").removeClass("active");
    $(this).addClass("active");

    var filter = $(this).data("filter");

    $("#projects div[data-type]").each(function() {
      var type = $(this).data("type");

      if (filter === "all" || type === filter) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

});