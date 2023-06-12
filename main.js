//CoinFlip
console.log("hi");
let numHeads = 0;
let numTails = 0;
let HeadsEl = document.getElementById("heads-out");
let TailsEl = document.getElementById("tails-out");
//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //GenRandomNumber
  let randNum = Math.random();
  console.log(randNum);

  //SimulateCoinFlip

  if (randNum < 0.5) {
    document.getElementById("output").innerHTML = "<img src = img/heads.png>";
    numHeads = numHeads + 1;
    HeadsEl.innerHTML = numHeads;
  } else {
    document.getElementById("output").innerHTML = "<img src = img/tails.png>";
    numTails = numTails + 1;
    TailsEl.innerHTML = numTails;
  }
}
