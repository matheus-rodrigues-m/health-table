var patients = document.querySelectorAll(".paciente");

console.log(patients);

// We will create a bouble event, that the father "table" will be listening all of his children

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event) { // All of the table need to listening the events

    //event.target.remove(); // The target of the double click event
    // But we don't want to remove the "td", but his father, the tr

    var eventTarget = event.target;
    var eventsFatherTarget = eventTarget.parentNode;

    // Fade out animation
    eventsFatherTarget.classList.add("fadeOut");

    setTimeout(function() {
        eventsFatherTarget.remove();
    }, 300); // setTimeout will remove the element after 500 milliseconds (time of the animation defined by CSS)
    

    // Or in just one line: event.target.parentNode.remove();
});

// patients.forEach(function(patient) {

//     patient.addEventListener("dblclick", function() {
//         console.log("Ihihi, i've been clicked");

//         this.remove(); // This --> this event trigger (patient)
//     });
// });