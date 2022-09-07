/* EVENTO PARA INTERAGIR COM O SITE (ESCUTANDO EVENTOS) */

var button = document.querySelector("#adicionar-paciente");

// Evento "ouvido" é o click, que executa showMessage
//titulo.addEventListener("click", showMessage)

// Criando função nomeada para executar
/*function showMessage()
{
    console.log("Teste");
}*/

// Ou pode-se criar a função anônima diretamente com o evento
/*
button.addEventListener("click", function(){
    console.log("button clicked");
});
*/

// Comportamente padrão do HTML é recarregar a página e limpar o console.log depois de receber a submissão
// Por isso vamos utilizar o preventDefault para evitar o comportamento padrão do HTML

button.addEventListener("click", function(event){
    event.preventDefault();
    console.log("button clicked");

    // Creation of the variable that Select the formulary
    var form = document.querySelector("#form-adiciona");

    // Creation of the variables that Select each one of the formulary typed items / values
    // We can acess the table elements from the name property
    // Logic on the corresponding function
    var patient = obtainPatientFromForm(form);
    
    console.log(patient);

    // Create a tr table element
    var trPatient = createTrTag(patient);

    // Verify the patient parameters is correct
    var errors = patientValidator(patient); // The retutn will be an empty string if the patient is valid, and a string error message otherwise

    console.log(errors)

    if(errors.length > 0) { // When is not valid
        showErrorMessages(errors);
        return; // Ends all of the function, and dont add the parameters of the form on the table
    }

    // Now, we will put the tr (with all of the children) as a child of the table on HTML (tbody tag)

    var table = document.querySelector("#tabela-pacientes");

    table.appendChild(trPatient);


    // Clean the form fields before click the button
    form.reset();

    var errorMessages = document.querySelector("#errorMessages");
    errorMessages.innerHTML = "";

});

// Function to obtain the patient information

function obtainPatientFromForm(form) {

    // Object "patient" created with a lot of properties
    var patient = {
        name : form.nome.value,
        weight : form.peso.value,
        height : form.altura.value,
        fat : form.gordura.value,
        imc : calculatesImc(form.peso.value, form.altura.value),
    }

    return patient;
}


// Function to recieve the patient data and create a corresponding "tr" tag

function createTrTag(patient) {

    // Creation of an element with the function createElement
    // In this case, we will create a "tr" table tag element
    
    var trPatient = document.createElement("tr");

    // Atribute a corresponding class to the tr element
    trPatient.classList.add("paciente");

    // And create the "td" tag element for each element of the table (how a td child)
    // Atribute a corresponding class to the "td"s elements
    var tdName = createTdTag(patient.name, "info-nome");
    var tdWeight = createTdTag(patient.weight, "info-peso");
    var tdHeight = createTdTag(patient.height, "info-altura");
    var tdFat = createTdTag(patient.fat, "info-gordura");
    var tdImc = createTdTag(patient.imc, "info-imc");

    // Now we need to defime td as a child of the tr using the function appendChild()
    // trPatient ia the father and the td properties are the children

    trPatient.appendChild(tdName);
    trPatient.appendChild(tdWeight);
    trPatient.appendChild(tdHeight);
    trPatient.appendChild(tdFat);
    trPatient.appendChild(tdImc);


    return trPatient;

}

// Function to recieve the patient tr data and create the corresponding children "td" tags

function createTdTag(patientData,className) {

    var td = document.createElement("td");
    td.classList.add(className);
    td.textContent = patientData;

    return td;

    // This function resume these lines of code
    /*
    var tdName = document.createElement("td")
    tdName.classList.add("info-nome");
    var tdWeight = document.createElement("td");
    tdWeight.classList.add("info-peso");
    var tdHeight = document.createElement("td");
    tdHeight.classList.add("info-altura");
    var tdFat = document.createElement("td");
    tdFat.classList.add("info-gordura");
    var tdImc = document.createElement("td");
    tdImc.classList.add("info-imc");

    // Now we will define that the values inserted on the form go to the created table line on button click

    tdName.textContent = patient.name;
    tdWeight.textContent = patient.weight;
    tdHeight.textContent = patient.height;
    tdFat.textContent = patient.fat;
    tdImc.textContent = patient.imc;
    */

    
}

function patientValidator(patient) {

    // A function return just one element, therefore, to make all of the validations, we need to return an array
    var errors = [];

    // Validate the form fill
    if (patient.name.length == 0) {
        errors.push("Blank name");  
    }

    if (patient.fat.length == 0) {
        errors.push("Blank fat");  
    }

    if (patient.height.length == 0) {
        errors.push("Blank height");  
    }

    if (patient.weight.length == 0) {
        errors.push("Blank weight");  
    }

    if (validateWeight(patient.weight)) { // check if the weight is correct      
    }
    else if (patient.height.length != 0){
        errors.push("Invalid weight: " + patient.weight);
    }

    // Or we can do the if this way:
    if (!validateHeight(patient.height) && patient.height.length != 0) errors.push("Invalid height: " + patient.height);
    // If the height is not correct

    return errors;
}


// Creation of the Function to showErrorMessages

function showErrorMessages(errors) {

    var ul = document.querySelector("#errorMessages");

    ul.innerHTML = "";

    // For each rather than a simple for, to go through all of the errors on the array

    errors.forEach(function(error) {
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
