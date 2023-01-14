const num1 = Math.ceil(Math.random()*10); // creating random integer between 1-10 i.e; multiplied by 10. For integer btn 1-100 *100
const num2 = Math.ceil(Math.random()*10); //Math.ceil() is used to remove decimal values

const questionEl = document.getElementById("question"); //taking html input and storing in javascript variable
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`; //.innerText is used to change displayed text on screen

const inputEl = document.getElementById("input");
const correctAns = num1*num2;
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score")); //JSON.parse is used to get correct value.Here ineger

//To avpoid any error we initialized score value to 0.
if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

const formEl = document.getElementById("form");
formEl = addEventListener("submit",()=>{
    const userAns = +inputEl.value; //+ is added to convert inputEl.value from string to integer

    if(userAns===correctAns){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
})

//Creating local storage to store score values
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}