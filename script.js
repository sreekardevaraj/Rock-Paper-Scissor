let userScore = 0;
let comScore = 0;

const one = document.querySelectorAll(".one");
const msg = document.querySelector("#msg");

const userScore1 = document.querySelector("#user-score");
const compScore1 = document.querySelector("#comp-score")

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return options[rand];
};

const draw = () => {
    msg.innerText = "Game draw..Play again..";
    msg.style.backgroundColor = "brown";
}

const winner = (userWin) => {
    if(userWin)
    {
        userScore++;
        userScore1.innerText = userScore;
        msg.innerText = "You win..";
        msg.style.backgroundColor = "green";
    }
    else
    {
        comScore++;
        compScore1.innerText = comScore;
        msg.innerText = "You loss..";
        msg.style.backgroundColor = "red";
    }
}

const play = (userId) => {
    console.log("User choise = ", userId);
    const computer = compChoice();
    console.log("Computer choise = ", computer);

    if (userId === computer) 
    {
        draw();
    }
    else
    {
        let userWin = true;
        if(userId === "rock")
        {
            userWin = computer === "paper" ? false : true;
        }
        else if(userId === "paper")
        {
            userWin = computer === "scissors" ? false : true;
        }
        else
        {
            userWin = computer === "rock" ? false : true;
        }
        winner(userWin);
    }

};

one.forEach((one) => {
    one.addEventListener("click", () =>{
        const userId = one.getAttribute("id");
        play(userId);
    });
});
