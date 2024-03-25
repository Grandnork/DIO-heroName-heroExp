let heroName ='Paul'
let heroExp = 2000

if (heroExp < 1000) {
    console.log(`O Herói de nome ${heroName} está no nivel Ferro com: ${heroExp} XPs`)
} else if(heroExp < 2000){
    console.log(`O Herói de nome ${heroName} está no nivel Bronze com: ${heroExp} XPs`)
} else if(heroExp < 5000){
    console.log(`O Herói de nome ${heroName} está no nivel Prata com: ${heroExp} XPs`)
} else if(heroExp < 7000){
    console.log(`O Herói de nome ${heroName} está no nivel Ouro com: ${heroExp} XPs`)
} else if(heroExp < 8000){
    console.log(`O Herói de nome ${heroName} está no nivel Platina com: ${heroExp} XPs`)
} else if(heroExp < 9000){
    console.log(`O Herói de nome ${heroName} está no nivel Ascendente com: ${heroExp} XPs`)
} else if(heroExp < 10000){
    console.log(`O Herói de nome ${heroName} está no nivel Imortal com: ${heroExp} XPs`)
} else if(heroExp >= 10000){
    console.log(`O Herói de nome ${heroName} está no nivel Radiante com: ${heroExp} XPs`)
}
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

 