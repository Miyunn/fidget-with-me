const figets = ["Pop Open", "Spin", "Spin Faster", 
"Triple Spin", "Double Spin", "Un Oh You almost dropped it",
 "Woohoo Quadruple Spin"];
const btn = document.getElementById("btn");
const fidget = document.querySelector(".fidget");

btn.addEventListener("click", function(){
    const randomFiget = getRandomFiget();
    fidget.textContent = figets[randomFiget];
    
    // Pop Open
    if(randomFiget == 0){
        document.querySelector(".spinner").style.background ="url('img/zpop.png') center center";
        document.querySelector(".spinner").style.width = "252px"
        document.querySelector(".spinner").style.height = "300px"
        btn.textContent = "Shut Close"

    }
    
    else{

        document.querySelector(".spinner").style.background ="url('img/zspin.png') center center";
        document.querySelector(".spinner").style.width = "210px"
        document.querySelector(".spinner").style.height = "212px"
        btn.textContent = "Fidget Me!"

        //Spin
        if(randomFiget == 1){ 
            document.querySelector(".spinner").style.animation="spin 1.5s ease-in-out"
        }
    
        //Spin Faster
        else if(randomFiget == 2){
            document.querySelector(".spinner").style.animation="spin 0.5s ease-in-out"
        }
    
        //Triple Spin
        else if(randomFiget == 3){
            document.querySelector(".spinner").style.animation="tspin 2s ease-in-out"
        }
    
        //Dobule Spin
        else if(randomFiget == 4){
            document.querySelector(".spinner").style.animation="dspin 1.5s ease-in-out"
        }
    
        //Almost Dropped
        else if(randomFiget == 5){
            document.querySelector(".spinner").style.animation="shake 0.5s ease-in-out"
        }
    
        //Quadruple Spin
        else if(randomFiget == 6){
            document.querySelector(".spinner").style.animation="qspin 3s ease-in-out"
        }
    }

    //Shut Close
    

});

function getRandomFiget(){
    return Math.floor(Math.random() * figets.length);
}

