var buttonAdd = document.querySelector("#buscar-pacientes");

buttonAdd.addEventListener("click", function() {
    console.log("Patient searched");

    // Request JavaScript for an API
    // XMLHttpRequest --> Responsible for make a http request
    var xhr = new XMLHttpRequest();

    // Function that will teach the request how it should act

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); // Request of the GET type for the  addres http://api-pacientes.herokuapp.com/pacientes

    xhr.addEventListener("load", function() { // After the request has loaded, we will print the responseText (the content of the API response)
        
        if (xhr.status == 200) { // 200 is the code of sucess submission
            var ajaxError = document.querySelector("#ajaxError");

            ajaxError.classList.add("invisible");

            // console.log(xhr.responseText);
            var response = xhr.responseText;

            var patients = JSON.parse(response); // Parese the JSON file (API responseText) into a JavaScript object
            console.log(patients);

            // We need to walth the array of patients from the API response and add each patient as a parameter to the function

            patients.forEach(function(patient) { // For each patient
                addPatientOnTable(patient) // We add on the table
            });
        }

        else {
            console.log(xhr.status);
            console.log(xhr.statusText);
            var ajaxError = document.querySelector("#ajaxError");

            ajaxError.classList.remove("invisible");
        }
    });

    xhr.send(); // Send the request
});