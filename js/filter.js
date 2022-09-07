// We want that in any input, in any character, the filter functions to act

var filterField = document.querySelector("#filter-table");

filterField.addEventListener("input", function() { // We take any character modification on the input field
    console.log(this.value); // Show any character modification

    var patients = document.querySelectorAll(".paciente");

    if (this.value.length > 0) { // The situarion of something typed on the input field
        console.log("we have something typed")

        for (var i = 0; i < patients.length; i++) {
            var tdName = patients[i].querySelector(".info-nome"); // Searching the name field of an patient (for each i position in the list)
            var name = tdName.textContent;
            // Here we will create a regular expression to match any typed characters on the input filter field
            var expression = new RegExp(this.value, "i"); // first parameter is the value to search, the second parameter is the disabled case sensitive
            
            if (!expression.test(name)) { // Test the match to any typed character
                patients[i].classList.add("invisible");
            }
            else {
                patients[i].classList.remove("invisible");
            }

            /*
            if (name != this.value) { // for each verificarion of the name fields of the table, if the value of the name typed is different, hide the name field corresponding
                patients[i].classList.add("invisible");
            }
            else {
                patients[i].classList.remove("invisible");
            }
            */
        }
    }
    else { // With this logic, we can guarantee that when the filter field is empty, the table shows all patients 
        for (var i = 0; i < patients.length; i++) {
            patients[i].classList.remove("invisible");
        }
    }

});