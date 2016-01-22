//Finds y value of given object
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

var emailSubmitListener = function(e){
    
    e.preventDefault(); // "Não deixa a página enviar o email"
    
    // Elementos
    var emailField = document.getElementById("idEmail"),
        nameField  = document.getElementById("idName");
    window.scroll(0,findPos(document.getElementById("section7")));
    // Texto
    var texto = "Olá, " + nameField.value + " te mandou um email.\n" +
                "E-mail de contato: " + emailField.value;

    document.getElementById("userEmailResult").innerHTML = texto;
    
    return;
}

document.getElementById("emailSubmit")
    .addEventListener("click", emailSubmitListener);
    