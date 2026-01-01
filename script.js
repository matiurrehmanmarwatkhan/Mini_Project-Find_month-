 function showMonth() {
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];

      const input = document.getElementById("monthInput").value;
      const output = document.getElementById("output");

      if (input >= 1 && input <= 12) {
        output.textContent = "Month: " + months[input - 1];
      } else {
        output.textContent = "Please enter a number between 1 and 12.";
      }
    }