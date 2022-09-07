var titulo = document.querySelector(".titulo")

titulo.textContent = "Aparecida Nutricionista"


/* IMC */

// Seleciona todas as linhas de pacientes

var patients = document.querySelectorAll(".paciente");

// For para percorrer lista de pacientes

for (let i = 0; i < patients.length; i++)
{
    //console.log(patient[i]);

    // Define que dentro do for, "patient" é o "patients" no índice [i]

    var patient = patients[i];

    // Calcula IMC

    var tdWeight = patient.querySelector(".info-peso");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".info-altura");
    var height = tdHeight.textContent;

    var pIMC = patient.querySelector(".info-imc");

    //Verificação de peso e altura
    var keyWeight = validateWeight(weight);
    var keyHeight = validateHeight(height);

    if (!keyWeight) { // If the Weight is not valid

         console.log("Invalid Weight!");
         pIMC.textContent = "Invalid Weight!";

         //Adição da classe que muda o estilo para indicação de erro
         patient.classList.add("invalidPatient");    

         keyWeight = false;
 
    }

    if (!keyHeight) { // If the Height is not valid
        console.log("Invalid Height")
        pIMC.textContent = "Invalid Height!";

        //Adição da classe que muda o estilo para indicação de erro
        patient.classList.add("invalidPatient");
        
        keyHeight = false;
    }

    
    if (keyHeight == true && keyWeight == true) {
        var imc = calculatesImc(weight, height);

        console.log(imc);

        pIMC.textContent = imc;
    }
}


// Functions to validate the weight and height

function validateWeight(weight) {

    if(weight <= 0 || weight >= 1000)
    {
        return false;
    }

    else {
        return true;
    }
}

function validateHeight(height) {

    if(height <= 0 || height >= 4)
    {
        return false;
    }

    else {
        return true;
    }
}

// Refactoring for create a imc calculation function that allows us to call it in another JS files

function calculatesImc(weight, height) {

    var imc = weight / (height * height);
    
    return imc.toFixed(2);
}
