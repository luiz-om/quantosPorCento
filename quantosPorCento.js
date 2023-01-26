/* Neste exercício o usuário deverá preencher os dois campos de entrada, 
N1 sendo o primeiro e N2 sendo o segundo respectivamente. Ao clicar no botão
 deverá ser exibido como resultado no alerta que N1 é X% de N2.
Exemplo:
Ao digitar os valores N1 = 25 e N2 = 200, 
a saída deverá ser: “25 é 12,5% de 200” */



var porcentos = ()=> {
let result =  document.getElementById('result')
let valor1 = document.getElementById('valor1').value
let valor2 = document.getElementById('valor2').value

let resultado=((+valor1/+valor2 ) * 100)
result.innerText = `resultado é ${resultado.toFixed(2)}%`

}
