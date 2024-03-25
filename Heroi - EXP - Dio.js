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