let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };



let isShopOpen = true;

function time(ms) {
    return new Promise((resolve, reject)=>{
        if(isShopOpen) {
            setTimeout(resolve, ms)
        } else {
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)
        await time(0)
        console.log("Production has started")
        await time(2000)
        console.log("The fruit was chopped")
        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
        await time(1000)
        console.log("Start the machine")
        await time(2000)
        console.log(`ice creame place on ${stocks.holder[0]}`)
        await time(3000)
        console.log(`${stocks.toppings[0]} was selected`)
        await time(1000)
        console.log("ice cream was served")
    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("Day ended shop is closed")
    }
}

kitchen()












// let toppingChoice = ()=>{

//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             resolve(console.log("Which toppings would you love?"))
//         }, 3000)
//     })
// }

// async function kitchen () {
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     await toppingChoice()
//     console.log("D")
//     console.log("E")
// }
// kitchen()
// console.log("Doing the dished")
// console.log("Cleaning the tables")
// console.log("Taking other orders")



// Promises
// let order = (time, work)=>{
    
//     return new Promise((resolve, reject)=>{
//         if(isShopOpen) {
//             setTimeout(()=>{
//                 resolve(work())
//             }, time)
//         } else {
//             reject(console.log("Our shop is closed"))
//         }

//     })

// }


// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order(0, ()=>console.log("Production has started"))
// })
// .then(()=>{
//     return order(2000, ()=>console.log("The fruit was chopped"))
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log("Start the machine"))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`ice creame place on ${stocks.holder[0]}`))
// })
// .then(()=>{
//     return order(3000, ()=>console.log(`${stocks.toppings[0]} was selected`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log("ice cream was served"))
// })
// .catch(()=>console.log("Customer left"))
// .finally(()=>console.log("Day ended shop is closed"))



 // Callback hell

// let order = (fruitName, callProduction) => {
    
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[fruitName]} was selected`)
//         callProduction()
//     }, 2000)

    
// }
// let production = () => {
//     setTimeout(()=>{
//         console.log("Production has started")

//         setTimeout(()=>{
//             console.log("The fruit has been chopped")

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                
//                 setTimeout(()=>{
//                     console.log("The machine was started")
//                     setTimeout(()=>{
//                         console.log(`ice was place on ${stocks.holder[0]}`)
                        
//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was added as toppings`)

//                             setTimeout(()=>{
//                                 console.log("Serve ice cream")
//                             }, 2000)

//                         }, 3000)

//                     }, 2000)
//                 }, 1000)
            
//             }, 1000)

//         }, 2000)

//     }, 0)
// }

// order(0,production)