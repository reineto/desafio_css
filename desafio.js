let a = 0;
let b = -11;

function sub (a,b){
  return a-b;
}
if ( a == 0){
  console.log("é zero");
} else if (a < 0 && b < 0 || a > 0 && b > 0) {
  console.log("Mesmo sinal")
} else {
  console.log("Sinais diferentes")
}
  /*Não entendi muito bem como deveria ser feito. Então fiz da forma que achei "mais correta" julgando pelo slide.*/