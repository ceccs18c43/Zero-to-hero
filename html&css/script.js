 const no=10
 function abc(){
  const c=10
  console.log(c)
  console.log(window.no)
    
 }

let c =20
 abc()
if(2==2){
    const z=12

} 
Datatype
Number
 var x=10
console.log(typeof x)
BigInt
var y=10n
 console.log(typeof y)
string
var z='abc'
console.log(typeof z)
boolean
 var z=true
console.log(typeof z)
undefined
var z
console.log(typeof z)
object
var z={}
console.log(typeof z)    // object
array
var z=[]
console.log(typeof z)  // object
 null
 var x=10
x=null
 console.log(typeof x)    // object
 symbol
 var x=Symbol(10)
console.log(typeof x)

null vs undefined
Normal comparison
 console.log('3'==3)
console.log("3"=='3')
 strict comparison
console.log("3"===3)

 var x
 var y=null
 console.log(x==y)
console.log(x===y)

var x=[1,2,3]
// x.push(4)
// console.log(x)
// var obj={"name":"Nivea" ,"age":23,"full name":"Nivea Gigen"}
// console.log(obj.name)
// console.log(obj["full name"])
// console.log(obj)

// var a="Hello everyone to this world"
// var b=[...a]
// console.log(b)

// var a=[1,2,3,4]
// var b=[5,6,7,8]
// var c=[...a,...b]
// console.log(c)

// var d=[...a,10]
// console.log(d)

// var ob={name:"Nivea", age:34,date:"20/09/20"}
// var ob2={name:"Neha", age:2, next:5}
// var on={...ob,...ob2}
// console.log(on)

// var a=[1,2,3]
// var b=a
// b.push('w')
// console.log(a)
// console.log(b)

// var a=[1,2,3]
// var b=[...a]
// b.push('w')
// console.log(a)
// console.log(b)

// var obj=[{name:"Nivea", age:34},{name:"Neha", age:2}]
// //var o=[...obj]
// var o=JSON.parse(JSON.stringify(obj))
// o[0].name="super"
// console.log(o)
// console.log(obj)

// let a=["apple","orange"]
// let [c1,c2]=a
// console.log(c1)
// console.log(c2)

// let options={ title:"Zero", age:23,type:"cRM"}
// let {title,age,type}=options
// console.log(type)

// var aa="Nivea"
// console.log(`My name is ${aa}`)

// var x=2
// var y=3
// console.log(`The sum of ${x} and ${y} is ${x+y}`)
// let obj={name:"salesforce",age:34, day:"Mon"}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// let str = JSON.stringify(obj)
// console.log(str)
// console.log(JSON.parse(str))
// let a=[2,3,4,5,18,45,60]
// let ne = a.map(function(current,index,array){
//     return current*2
// })
// console.log(ne)
// let nes = a.filter(function(current,index,array){
//     return current>=18
// })
// console.log(nes)
// let nest = a.every(function(current,index,array){
//     return current>=18
// })
// console.log(nest)
// let neste = a.some(function(current,index,array){
//     return current>=18
// })
// console.log(neste)
// let qwe=["nik","Jane","fan","kel"]
// console.log(qwe.sort())

// let so= a.sort(function(a,b){
//     return b-a
// })
// console.log(so)
// let num=[2,5,46,54]
// let ren = num.reduce(function(total,current){
//   return total+current
// },0)
// console.log(ren)
// num.forEach(function(current){
//     console.log(current)
// })

// function check(data){
//     return new Promise(function(resolve,reject){
//         if(data==='success'){
//             return resolve("successfully exec")}
//             else{
//                return reject("un sucees")
//             }
//         }
//     )
// }
// check('success').then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })
fetch('https://github.com/ceccs18c43/Zero-to-hero').then(function(result){
  //console.log(result)
  return result.json() 
}).then(function(response){
   console.log(response)
})
//
// here import minus is default import
 import minus,{pi,add} from './utils.js'
 console.log(pi)
 console.log(add(2,5))
 console.log(minus(4,3))
//Import all exported members
import * as utils from './utils.js'
console.log(utils.pi)
console.log(utils.add(2,5))
console.log(utils.minus(4,3))




// let ele = document.querySelector('div')
// console.log(ele)
ele.style.color='green'

// let elem = document.querySelectorAll('div')
// console.log(elem)
// Array.from(elem).forEach(function(item){
//     item.style.color='red'
// })
//  function hi(){
//     console.log("hi")
//  }
//  let btn = document.querySelector("button")
//  btn.addEventListener("click",hi)

// document.addEventListener("mousemove",handler)
// function handler(){
//    document.querySelector(".demo").innerHTML=Math.random()
// }
// function removeHandler(){
//    document.removeEventListener("mousemove",handler)
// }
// document.addEventListener("hello",function(data){
//    console.log("hello called",data.detail)
// })
// function hi(){
//    let event=new CustomEvent("hello",{
//       detail:{name:"nivea"}
//    })
// document.dispatchEvent(event)
// 

// const sum = data => data+10 
// console.log(sum(7))

// let obj = {
//    name : "nikhil",
//    getName : function(){
//       console.log(this.name)
//       function fullname(){
//          console.log("my name is "+ this.name +" Gigen")
//       }
//       fullname()
//    }

// }
// obj.getName()

// 
//setTimeout
// let timerid = window.setTimeout(function(){
//    console.log("hello")
// },100)
// console.log(timerid)
// clearTimeout(timerid)

//setInterval
let time = window.setInterval(function(){
   console.log("hello")
},100)
console.log(time)
clearInterval(time)
