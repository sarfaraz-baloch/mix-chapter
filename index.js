// console.log("running")

// Q1  Marging names

// let user1 = prompt("write your frist name")
// let user2 = prompt("write your second name")
// console.log(user1 + " " + user2)



//Q3  finding 7 index of pakistan

// let country = "pakistan"
// let count = "n"
// for(let i =0; i < country.length; i++){
//     if(country[i] == count ){
//         console.log( count ,i );
//     }
// }



// Q5 FINDING LAST 3rd Charter of pakistan

// var country2 =  "pakistan"
// let result1 = country2.indexOf("i")
// let result2 = country2.charAt(3)
// console.log(`charter is ${result1} :${result2}`);


//Q7 CHANGING CITY NAMES

// var city = "hyderbad"
// var replacement = city.replace("hyderbad", "islambad")
// console.log(replacement)



// Q8 Replacing and to &


// let words= `“Ali and Sami are best friends. They play cricket and
// football together.”;`

// words = words.replaceAll("and", "&")
// console.log(words)



// Q2  finding length and fvrt mobilephone

// var mobile = prompt("select your mobile phone")
// var mobileLength = mobile.length
// console.log(mobile , mobileLength)



// Q4  finding last index 

// var hello = "hello world"
// var lastindex = hello.lastIndexOf("l")
// console.log(hello.charAt(lastindex),lastindex)



// Q9 converting string to number

// let num = "472"
// num = Number(num)
// console.log(typeof num)


// Q13 comparing password to not allowed if(@ ! ,)

// let user = prompt("write your name")
// let flage = false 
// for(let i=0; i < user.length; i++){
//     if(user[i] == "@" || user[i] == "!" || user[i] == "," ) {
//         flage = true
//         alert("not accected userName")
//     }
// }
// if(flage == false){
//     alert("welcome")
// }



// Q14  taking user input to select your fvrt cakes

// let bites = ["cake", "apple pie","cookies", "chips", "patties"]
// let user4 = prompt("write your fvrt bakery ABC name ")
// let flage2 = false 

// for(let i =0; i < bites.length;i++){
//     if(user4.toLowerCase() == bites[i].toLowerCase()){
//         flage2 = true
//         alert(`${user4} is avaiable at index ${i} in our bakery`)
//     }
// }

// if(flage2 === false){
//     alert(`we are sorry ${user4 } is not avaiable in our bakery`)
// }



// Q15  password compegration

// let password = prompt("write a password which is start with captial alphebet and number ring shold be 6")
// let A_to_Z = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let numbers = "1234567890"

// let captialLetter = false
// let num = false 
// let ring = false

// if(password.length >= 6) ring = true

// for(let i=0; i < password.length;i++){

//     if(A_to_Z.indexOf(password[i]) !== -1) captialLetter = true

//     if(numbers.indexOf(password[i]) !== -1){
//         num = true
//     }
// }

// if( captialLetter && num && ring){
//     alert("password is correct")
// }else{
//     alert("password is wrong")
// }




//Q16 converting string to array

// var uni = "university".split()
// console.log( uni)







