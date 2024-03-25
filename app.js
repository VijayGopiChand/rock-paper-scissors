let userScore=0;
let compScore=0;
let display=document.getElementById('msg');
let count1=document.getElementById('user');
let count2=document.getElementById('comp');

const user_selection=document.querySelectorAll(".choice");

const compChoice = () =>
{
  const arr=['rock','paper','scissor'];
  const comp=Math.floor(Math.random()*3);
 return arr[comp];

}
const game = (id) =>
{
console.log("user choice =",id);
const compC=compChoice();
console.log("Comp =",compC);

//draw
if(id == 'rock' && compC == 'rock' ||
   id == 'paper' && compC == 'paper' ||
   id == 'scissor' && compC == 'scissor')
  {
    display.style.background="blueviolet";
   display.innerText=" ! DRAW ! "
  }

//user wins
else if(id == 'rock' && compC == 'scissor'||
        id == 'paper' && compC == 'rock' ||
        id == 'scissor' && compC == 'paper')
      {
        display.style.background="green";
        display.innerText=" ! YOU WIN ! - computer selects " +compC;
       userScore=userScore+1;
       count1.innerText=userScore
      }

else
      {
        display.style.background="red";
        display.innerText="! YOU LOOSE ! - computer selects "+compC;
        compScore=compScore+1;
        count2.innerText=compScore;
      }
}

user_selection.forEach((choice)=>{

  choice.addEventListener("click",()=>{

    const id=choice.getAttribute("id");
  
   game(id);
  })
})