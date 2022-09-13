


/*const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
for (let i = 0; i<=array.length-1; i++){
    console.table(`jogador ${i+1} : ${array[i]}`)
}*/

//fazer com dois for
const jogadores = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
for (let i in jogadores){
    console.log(i)
    for(let j of jogadores){
        console.log(j)
    }
}
