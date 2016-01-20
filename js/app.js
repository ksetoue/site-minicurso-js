// BIBLIOTECA
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
})
