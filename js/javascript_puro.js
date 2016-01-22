var emailSubmitListener = function(e){
    
    e.preventDefault(); // "Não deixa a página enviar o email"
    
    // Elementos
    var emailField = document.getElementById("idEmail"),
        nameField  = document.getElementById("idName");
    
    // Texto
    var texto = "Olá, " + nameField.value + " te mandou um email." +
                "E-mail de contato: " + emailField.value;

    document.getElementById("userEmailResult").innerHTML = texto;
    
    return;
}

document.getElementById("emailSubmit")
    .addEventListener("click", emailSubmitListener);
    