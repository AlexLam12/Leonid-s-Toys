const toys = [
{
    id: 1,
    name: "Playstation",
    maker: "Sony",
    price: 400,
    weight: 3
},
{
    id: 2,
    name: "Xbox",
    maker: "Microsoft",
    price: 400,
    weight: 3.1
},
{
    id: 3,
    name: "Wii",
    maker: "Nintendo",
    price: 300,
    weight: 2.2
}
]

const gameCube = {
    id: 4,
    name: "Game Cube",
    maker: "Nintendo",
    price: 200,
    weight: 1.9
}

const nintendo64 = {
    id: 5,
    name: "Nintendo 64",
    maker: "Nintendo",
    price: 180,
    weight: 3.1
}

toys.push(gameCube)
toys.push(nintendo64)

const addtoyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLasttoy = toys[lastIndex]
    const maxId = currentLasttoy.id
    const idForNewtoy = maxId + 1

    toyObject.id = idForNewtoy
    toys.push(toyObject)
}

addtoyToInventory(nintendo64)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} grams.`)
}
console.log(toys)

// const toyToFind = 4
// for (const toy of toys){
//     if (toy.id === toyToFind){
//         toy.price = toy.price + toy.price*.05
//         console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
//     }
// }
