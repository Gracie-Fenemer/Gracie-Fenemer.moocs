//prompting user for their name

function sayHello (){
    const name = prompt("What is your name?")
    alert("Hello " + name + " welcome to my website");
}

sayHello()

//roling a dice to give a random number

function rollDice(){
    let dice = Math.floor(Math.random()* 6) + 1;
    alert("You have rolled a " + dice + "!")
}

rollDice()

//how long will it take to get first developer job

function jobSearch(){
    let months = 0
    let dice = Math.floor(Math.random()* 6) + 1;

    months += dice

    alert("It will take you " + months + " months to get your first developer job")

    console.log("hello this is the console log")
}

jobSearch()