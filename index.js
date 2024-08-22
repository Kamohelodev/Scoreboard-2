let homeScoreBtn1 = document.getElementById("home-score-btn1")
let homeScoreBtn2 = document.getElementById("home-score-btn2")
let homeScoreBtn3 = document.getElementById("home-score-btn3")

let homeScore = document.getElementById("home-score")
let score = 0

function increaseHomeScoreOne() {
    score += 1;
    homeScore.textContent = score
}

function increaseHomeScoreTwo() {                      
    score += 2;
    homeScore.textContent = score
}

function increaseHomeScoreThree() {
    score += 3;
    homeScore.textContent = score
}

let guestScoreBtn1 = document.getElementById("guest-score-btn1")
let guestScoreBtn2 = document.getElementById("guest-score-btn2")
let guestScoreBtn3 = document.getElementById("guest-score-btn3")

let guestScore = document.getElementById("guest-score")
let scoreTwo = 0

function increaseGuestScoreOne() {
    scoreTwo += 1;
    guestScore.textContent = scoreTwo
}

function increaseGuestScoreTwo() {
    scoreTwo += 2;
    guestScore.textContent = scoreTwo
}

function increaseGuestScoreThree() {
    scoreTwo += 3;
    guestScore.textContent = scoreTwo
}



function resetScores() { 
document.getElementById("home-score").textContent = 0
document.getElementById("guest-score").textContent = 0
} 