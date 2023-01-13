   function addAppointment() {
      // Get the inputted data
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value;

      // Create an object to store the data
      var appointment = {
        name: name,
        email: email,
        date: date,
        time: time
      };

      // Get the existing appointments from the local storage
      var appointments = JSON.parse(localStorage.getItem("appointments")) || [];

      // Add the new appointment to the array
      appointments.push(appointment);

      // Save the array to the local storage
      localStorage.setItem("appointments", JSON.stringify(appointments));

      // Add the data to the table
      var table = document.getElementById("appointments");
      var row = table.insertRow();
      row.insertCell().innerHTML = name;
      row.insertCell().innerHTML = email;
      row.insertCell().innerHTML = date;
      row.insertCell().innerHTML = time;
    }

    // On page load, get the appointments from the local storage
    // and add them to the table
    var appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    for (var i = 0; i < appointments.length; i++) {
      var appointment = appointments[i];
      var table = document.getElementById("appointments");
      var row = table.insertRow();
      row.insertCell().innerHTML = appointment.name;
      row.insertCell().innerHTML = appointment.email;
      row.insertCell().innerHTML = appointment.date;
      row.insertCell().innerHTML = appointment.time;
    }

 function resetAppointments() {
    // Clear the local storage
    localStorage.clear();

    // Reload the page
    location.reload();
  }