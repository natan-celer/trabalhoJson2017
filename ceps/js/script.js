function getUrl(cep) {
    return "https://viacep.com.br/ws/" + cep + "/json/";
}

function buscaCep(cep) {
    $(".dados").html();
    $.ajax({
        url: getUrl(cep),
    }).done(function (dados) {
        $(".dados").html(dados.localidade + ", " + dados.uf);
    });
}

$(".busca").on("click", function () {
    buscaCep($(".buscaCep").val());
})