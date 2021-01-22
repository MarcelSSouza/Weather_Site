//ENVIAR A REQUISIÇÃO
var xhr = new XMLHttpRequest();
var bot = document.querySelector(".botao");
var output = document.querySelector(".temperatura");
var output2 = document.querySelector(".humidity");
var output3 = document.querySelector(".wind");
var output4 = document.querySelector(".city");
var output5 = document.querySelector(".sunrise");
var output6 = document.querySelector(".sunset");
var output7 = document.querySelector(".description");
var output8 = document.querySelector(".date");

var resposta = xhr.open(
  "GET",
  "https://api.hgbrasil.com/weather?format=json-cors&key=e9eb90f6&user_ip=remote"
);
xhr.send();

//ESCUTAR A REPOSTA DA REQUISIÇÃO E POR NUM ELEMENTO DO HTML OU IMPRIMIR NO CONSOLE

xhr.addEventListener("load", function () {
  //nos retorna a resposta em JSON e depois converte para objeto
  var resposta = xhr.responseText;
  var resposta1 = JSON.parse(resposta);
  var respostaout = resposta1["results"]["temp"] + "°C";
  var respostaouthumidity = resposta1["results"]["humidity"] + "%";
  var respostaoutwind = resposta1["results"]["wind_speedy"];
  var respostaoutdate = resposta1["results"]["date"];
  var respostaoutdescription = resposta1["results"]["description"];
  var respostaoutsunrise = resposta1["results"]["sunrise"];
  var respostaoutsunset = resposta1["results"]["sunset"];
  var respostaoutcity = resposta1["results"]["city_name"];
  output.innerHTML = respostaout;
  output2.innerHTML = respostaouthumidity;
  output3.innerHTML = respostaoutwind;
  output4.innerHTML = respostaoutcity;
  output5.innerHTML = respostaoutsunrise;
  output6.innerHTML = respostaoutsunset;
  output7.innerHTML = respostaoutdescription;
  output8.innerHTML = respostaoutdate;
});

function show(){
  $(".inicio").addClass('d-none')
  $(".tudo").removeClass('d-none')
}
