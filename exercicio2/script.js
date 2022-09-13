
let numeroUsuario = Number(prompt('Digite um número: '))
let calculadora = ['','','','','','','','','','',]
for(let i in calculadora){
    console.log(i*numeroUsuario+numeroUsuario) //repete o valor dele mesmo
}

/* é preciso fazer +numeroUsuario porque quando o i dá a primeira volta e passa pelo console ele vale 0
e zero multiplicado por qualquer numero é zero, então ele imprimi o numero 0 no console.
então quando eu coloco *numeroUsuario vai ser 0 X numero + o valor de numero
se numero for 2 então fica -> 0x2= 0 + 2 = 2. 


*/