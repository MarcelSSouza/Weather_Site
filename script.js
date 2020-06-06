//ENVIAR A REQUISIÇÃO
var xhr= new XMLHttpRequest()
var bot = document.querySelector(".botao");
var output=document.querySelector(".temperatura")
var output2=document.querySelector(".humidity")
var output3=document.querySelector(".wind")
	xhr.open("GET","https://api.openweathermap.org/data/2.5/weather?id=3450554&appid=6b8661b06c381528f71386ee3a01ff53&units=metric")
	xhr.send();
 

//ESCUTAR A REPOSTA DA REQUISIÇÃO E POR NUM ELEMENTO DO HTML OU IMPRIMIR NO CONSOLE

xhr.addEventListener("load",function(){

//nos retorna a resposta em JSON e depois converte para objeto
var resposta= xhr.responseText; 
var respostajson= JSON.parse(resposta)
var respostaout=respostajson["main"]["temp"]
var respostaouthumidity=respostajson["main"]["humidity"]
var respostaoutwind=respostajson["wind"]["speed"]
output.innerHTML = respostaout + " &degC";
output2.innerHTML = respostaouthumidity + "%";
output3.innerHTML = (respostaoutwind*3.6).toFixed(0) + " Km";
});
