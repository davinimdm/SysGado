$(document).ready(function(){
    $(".addGado").click(function(){ $("#conteudo").load("gado/visao/addGado.html") });
    $(".listaGado").click(function(){ $("#conteudo").load("gado/visao/listaGado.html") });
    $(".dados-Usuario").click(function(){ $("#conteudo").load("Usuario/visao/adUsuario.html") });
    
});