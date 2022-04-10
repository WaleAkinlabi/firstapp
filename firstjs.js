let your_email = prompt("what is your email");


else if(your_email.indexOf("@") === -1){
    console.log("Invalid email");
}

else if(your_email.indexOf(".com") === -1){
    console.log("This email is invalid");
}
else{if(your_email.length === 0){
    console.log("email cannot be empty");
}

    console.log('Your email is : ' + your_email);
    }


let password = "abdullah2020";

let userPassword = prompt("Enter Password");

while(userPassword !== password){
    alert("Wrong Password, please try again");
    userPassword = prompt("Enter Password");

}

alert("Congratulations Sigin successful");


Function without Argument
function changeCase(){
    let name = "abdullah";
    console.log(name.toUpperCase())
}

// Function with Argument
function capitalizeText(personName){
    console.log(personName.toUpperCase());
}


function add(a, b){
    let result = a + b;
    console.log(result);
    return result;
}

function multiply(f, j){
    let result =  f * j;
    return result;
}
multiply(20,3)

let final = 50 + multiply(2, add(15, 3));
console.log(final)


    

Function with Argument
function adjust(word){
    console.log(word.replace(/-/g,"_"));
}
adjust("Hello-World")

let my_word = "abdulla-akinlabi-olatunji-yusuf-";

adjust(my_word);


let secretnumber = 70;
let guessnumber = prompt("guess the number");

while(guessnumber != secretnumber){
    if(guessnumber > 1 && guessnumber < 20){
        alert("Too low, You are like 50 numbers below");
        guessnumber = prompt("Guess the Number");
    }
    else if(guessnumber > 20 && guessnumber < 50){
        alert("Too low, You are like 20 numbers below");
        guessnumber = prompt("Guess the Number");
    }
    else if(guessnumber > 50 && guessnumber < 69){
        alert("Too low, You are so close, try again");
        guessnumber = prompt("Guess the Number");
    }
    else if(guessnumber > 71 && guessnumber < 90){
        alert("Too high, you are about 20 numbers above");
        guessnumber = prompt("Guess the Number");
    }
    else if(guessnumber > 90){
        alert("Too high");
        guessnumber = prompt("Guess the Number");
    }
}

alert('You guessed right')



//There are two ways of decaring a function. Function expression(saved to a variable) and function declaration


//Write A small application to check who is at the door
//If unkwown person is at the door, tell the strangers are not allowed to enter 
//ask who is at the door again
//If amina is at the door, alert her that we don't want girls here
//then ask who is at the door again
//If Ibrahim or Abdulsalam is at the door, tell them that kids are not allowed to enter
//then check who is at the door again
//If Muhammad is at the door, tell him he can enter, buh he needs to behave himself
//then ask who is at the door again
//If Director is at the door, tell him "You're Welcome Sir"
//Don't ask who is at the door anymore.


let activePerson = "director";
let personName = prompt("Who is at the door").toLowerCase();

while(personName != activePerson.toLowerCase()){
    if(personName === "amina".toLowerCase()){
        alert("Girls are not allowed");
        personName = prompt("Who is at the door").toLowerCase();
    }
    else if(personName === "ibrahim".toLowerCase()){
        alert("Kids are not allowed to enter");
        personName = prompt("Who is at the door").toLowerCase();
    }
    else if(personName === "abdulsalam".toLowerCase()){
        alert("Kids are not allowed to enter");
        personName = prompt("Who is at the door").toLowerCase();
    }
    else if(personName === "muhammad".toLowerCase()){
        alert("You can enter but you need to behave yourself");
        personName = prompt("Who is at the door").toLowerCase();
    }
    else{
        alert("Who knows you".toLowerCase());
        personName = prompt("Who is at the door").toLowerCase();
    }
}
 alert("welcome sir")

// DATA STRUCTURES

let fruits = ['orange', 'banana', 'apple', "mango", 'dates', 'pawpaw', 'pineapple', 'guava'];

// for(let i = 0; i < fruits.length; i++){
//     fruits[i] = fruits[i].toUpperCase();
// }

Orange, Banana, Apple 
// fruits[0] = fruits[0].toUpperCase()
// orange = ORANGE


// console.log(fruits);
// console.log(fruits[3])
// let name = "olatunji";

// name[0] = "B";

// console.log(name);

// fruits[0] = "Pineappple";



















// let count = 0;

// while(count < fruits.length){
//     console.log(fruits[count]);
//     count++;
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i])
// }
