document.querySelector("#roll").addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const imageSource1 = `./images/dice${randomNumber1}.png`;
    const imageSource2 = `./images/dice${randomNumber2}.png`;
    document.querySelector(".img1").setAttribute("src", imageSource1);
    document.querySelector(".img2").setAttribute("src", imageSource2);
    if (randomNumber1 > randomNumber2) {
        document.querySelector("#result").textContent = "Player 1 wins!";
      } else if (randomNumber2 > randomNumber1) {
        document.querySelector("#result").textContent = "Player 2 wins!";
      } else {
        document.querySelector("#result").textContent = "It's a draw!";
      }
    
});

  