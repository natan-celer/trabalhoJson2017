function getUrl() {
    return "http://fipeapi.appspot.com/api/1/carros/marcas.json";
}

function buscaMarcas() {
    $(".dados").html();

    $.ajax({
        url: getUrl(),
    }).done(function (dados) {

        var texto = "";
        dados.forEach(function (marca) {
            texto += marca.fipe_name + " - " + marca.id + "<br>";
        });

        $(".dados").html(texto);

    }).fail(function () {
        $(".dados").html("Deu erro !!");
    });
}

function getUrlVeiculosByMarca(codigoMarca){
    return "http://fipeapi.appspot.com/api/1/carros/veiculos/" + codigoMarca + ".json"
}

function getVeiculosMarca(){
    $.ajax({
        url: getUrlVeiculosByMarca(6)
        
    }).done(function(carros){
        carros.forEach(function(carro){
            $("#carros").append("<li onclick='getAnoVeiculo("+carro.id+")'>"+carro.name+"</li>");
        });
    });
    
}

function getAnoVeiculo(codigo){
    $.ajax({
        url: "http://fipeapi.appspot.com/api/1/carros/veiculo/6/"+codigo+".json"
    }).done(function(carros){
        getValorCarro(codigo, carros[0].id);
    });
}

function getValorCarro(codMod, codCarro){
    
}


getVeiculosMarca();





