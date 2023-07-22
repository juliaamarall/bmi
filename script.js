// var fm = document.getElementsByTagName('form');
// var valor = document.getElementById('value');


// fm.addEventListener("submit", function(event){
//    event.preventDefault();

//    var altura = document.getElementById('caixa01').value;
//    var peso = document.getElementById('caixa02').value;

//    var imc = ((altura * altura) / peso).toFixed(2);

//       valor.textContent = 'testando esse cu'
   
// });

var fm = document.getElementsByTagName('form')[0];
var valor = document.getElementById('value');

fm.addEventListener("submit", function(event){
   event.preventDefault();

   var altura = document.getElementById('caixa01').value;
   var peso = document.getElementById('caixa02').value;

   var imc = ((altura * altura) / peso).toFixed(2);

   valor.textContent =  imc;
});

