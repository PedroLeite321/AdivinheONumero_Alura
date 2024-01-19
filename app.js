const initiator = (()    =>  {
    let secretNumber;
    let value = 5
    const states = {
        userInteractions: {
            userInput: document.getElementById("guessInput"),
            awnserInfo: document.querySelector(".container__texto-azul"),
            tips: document.querySelector(".tips"),
            submitButton: document.getElementById("submitBtn"),
            tries: document.querySelector(".tries"),
        }
    }
    
    
    getWinningCriteria = (userInput , secretNumber)   =>  {
        if(secretNumber === userInput)  {
            states.userInteractions.awnserInfo.textContent = "Acertou!!!";
            states.userInteractions.tips.textContent = "Parabéns!";
        } else if (secretNumber > userInput)    {
            states.userInteractions.awnserInfo.textContent = "Errou!";
            states.userInteractions.tips.textContent = "Parabéns!";
            states.userInteractions.tips.textContent = "O número é menor"
        }else if ( secretNumber < userInput)    {
            states.userInteractions.awnserInfo.textContent = "Errou!";
            states.userInteractions.tips.textContent = "O Número é maior";
        }else   {
            states.userInteractions.awnserInfo.textContent = "ERRO";
        }
    }

    const getSecretNumber = ()  =>  {
        const secretNumber = Math.floor(Math.random() * 100);

        return secretNumber;
    }
    secretNumber = getSecretNumber();
    const getUserInput = () =>  {
        const userInput = states.userInteractions.userInput.value;
        
        return userInput;
     }
    
    const startGame = () => {
        console.log(secretNumber);
        value--;
        getWinningCriteria(Number(getUserInput()), secretNumber);
    }
    states.userInteractions.submitButton.addEventListener("click", () => {
        if(value >= 0 )  {
            states.userInteractions.tries.textContent = value;
            startGame();
        }
        else    {
            alert("você errou, e suas tentativas se esgotaram. Por favor, tente novamente");
            location.reload();
        }
        
    });
})();