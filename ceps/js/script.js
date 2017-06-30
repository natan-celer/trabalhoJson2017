function getUrl(cep) {
    return "https://viacep.com.br/ws/" + cep + "/json/";
}

function buscaCep(cep) {
    $(".dados").html();
    $.ajax({
        url: getUrl(cep),
    }).done(function (dados) {
        $(".dados").html(dados.localidade + ", " + dados.uf + "<br>" );
        
        $(".dados").append(dados.logradouro+", "+dados.bairro);
        
    }).fail(function(){
       $(".dados").html("Deu erro !!");
    });
}

$(".busca").on("click", function () {
    buscaCep($(".buscaCep").val());
})