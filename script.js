console.log("Welcome to Tic Tac Toe");
let gameover = new Audio("mixkit-arcade-retro-game-over-213.wav");

let turn = "X";
let isgameover = false
//Function to change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            boxtext[e[1]].innerText === (boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== "") {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "-won the game!";
            isgameover = true;
            document.getElementsByTagName("img")[0].style.width = "200px";
        }

    })


}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(ele => {
    let boxtext = ele.querySelector(".boxtext");
    ele.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn of - " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((ele) => {
        ele.innerText = " "
    })

    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn of - " + turn;
    document.getElementsByTagName("img")[0].style.width = "0px";
})
