//initialize global variables
let computerSelection;
let userSelection;

//assign buttons
const scissors = document.querySelector('.scissors')
const paper = document.querySelector('.paper')
const rock = document.querySelector('.rock')

const computerPlay = () => {
    const options = ['rock','paper','scissors']
    const computerMove = options[Math.floor(Math.random()*options.length)];
    return computerMove
};


const rpsRound = (computerSelection, userSelection) => {
    
    computerSelection = computerPlay();
    let winner= ''

    if (userSelection== computerSelection){
        winner= 'No One'
    }
    //user rock
    else if (userSelection == 'rock' && computerSelection == 'scissors'){
        winner = 'computer'
    } else if (userSelection == 'rock' && computerSelection == 'paper'){
        winner = 'user'
    }
    //user scissors
    else if (userSelection == 'scissors' && computerSelection == 'paper'){
        winner = 'user'
    } else if( userSelection == 'scissors' && computerSelection == 'rock'){
        winner = 'computer'
    }
    //user paper
    else if (userSelection == 'paper' && computerSelection == 'scissors'){
        winner = 'computer'
    } else if( userSelection == 'paper' && computerSelection == 'rock'){
        winner = 'user'
    }
    
    console.log(`You threw ${userSelection} and the computer threw ${computerSelection} - ${winner} wins!`)
    return winner
};

//buttons to play round
rock.addEventListener('click',()=>{
    rpsRound(computerSelection,'rock')
});
scissors.addEventListener('click',()=>{
    rpsRound(computerSelection,'scissors')
});
paper.addEventListener('click',()=>{
    rpsRound(computerSelection,'paper')
});
