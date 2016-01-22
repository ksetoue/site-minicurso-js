// BIBLIOTECA

// var executeUserCode = function(){
//     var idBase = this.getAttribute("id").split("Submit")[0];
//     var codigo = $("#"+idBase).val();
//     var containerResultado = $("#section4");
//     $("body").scrollTop(containerResultado.offset().top);
//     try{
//         (new Function(codigo))();
//     }catch(e){
//         console.error(e);
//     }
// }


// // INICIALIZAÇÃO
// $(document).ready(function(){
//     $("#userCodeSubmit").click(executeUserCode);
//     $("#userCode").val(
//         '$("#resultImage").animate(\n'+
//         '   {\n'+
//         '       left: "550px"\n'+		
//         '   },\n'+
//         '   1000\n'+
//         ');'         
//     );             
// })

var formTag = document.forms[0];

var buttonTeste = function(){
    var txt
    for (var i = 0; i < formTag.length; i++) {
        txt = txt + formTag.elements[i].value + "<br>";
    }
    
    var containerResultado = $("#section7");
    $("body").scrollTop(containerResultado.offset().top);
    try{
        (new Function(codigo))();
    }catch(e){
        console.error(e);
    }
}


var showInfoForm = function(){
    return 1;
}

var resetCat = function(){
    document.querySelector("#resultImage").setAttribute("style", 'left: 0px');
}

var executeUserCode = function(){
    var idBase = this.getAttribute("id").split("Submit")[0];
    var codigo = $("#"+idBase).val();
    var containerResultado = $("#section4");
    $("body").scrollTop(containerResultado.offset().top);
    try{
        (new Function(codigo))();
    }catch(e){
        console.error(e);
    }
}

// INICIALIZAÇÃO
$(document).ready(function(){
    $("#userCodeSubmit").click(executeUserCode);
    $("#userCode").val(
        '$("#resultImage").animate(\n'+
        '   {\n'+
        '       left: "700px"\n'+		
        '   },\n'+
        '   1000,\n'+
        '   "linear",\n'+
        '   resetCat\n'+
        ');'         
    );             
})
