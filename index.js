//render list of fruits, at least 3 fruits
//Each fruit should have different prices that can be modified
//Delete a fruit
const wrapper=document.getElementById('wrapper')

const fruits=[
    {
        name:"Apple",
        price:0.99
    },
    {
        name:"Banana",
        price:1.23
    },
    {
        name:"Orange",
        price:0.54
    }
]

function renderFruits(fruitsList){
    wrapper.innerHTML=""
    fruitsList.forEach(fruit=>{
        const ele=document.createElement('p')
        ele.innerHTML="Name: "+fruit.name+"   Price: "+fruit.price
        wrapper.appendChild(ele)
        const increaseBut=document.createElement('button')
        increaseBut.innerHTML="Increase price by .05"
        increaseBut.addEventListener('click',function(){
            fruit.price+=.05
            renderFruits(fruits)
        })
        wrapper.appendChild(increaseBut)
        const decreaseBut=document.createElement('button')
        decreaseBut.innerHTML="Decrease price by .05"
        decreaseBut.addEventListener('click',function(){
            fruit.price-=.05
            renderFruits(fruits)
        })
        wrapper.appendChild(decreaseBut)
        const DeleteBut=document.createElement('button')
        DeleteBut.innerHTML="Delete "+fruit.name
        DeleteBut.addEventListener('click',function(){
            fruits.splice(fruitsList.indexOf(fruit),1)
            renderFruits(fruits)
        })
        wrapper.appendChild(DeleteBut)
    })
}
renderFruits(fruits)