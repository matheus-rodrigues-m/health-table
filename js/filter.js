// We want that in any input, in any character, the filter functions to act

var filterField = document.querySelector("#filter-table");

filterField.addEventListener("input", function() { // We take any character modification on the input field
    console.log(this.value); // Show any character modification

    var patients = document.querySelectorAll(".paciente");

    for (var i = 0; i < patients.length; i++) {
        var tdName = patients[i].querySelector(".info-nome"); // Searching the name field of an patient (for each i position in the list)
        var name = patients[i].textContent;
    }
});