const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');
const box7 = document.querySelector('#box7');
const box8 = document.querySelector('#box8');
const box9 = document.querySelector('#box9');

const box_list = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

let current_player = "Player 1";

function gameOver(player) {
    const message = document.querySelector('#message')
    const div = document.createElement('div');
    div.id = "victory";
    div.textContent = (player+" has won the game!");
    
    message.appendChild(div);
};


function checkStatus(player) {
    if (box1.textContent==box2.textContent && box2.textContent==box3.textContent && box1.textContent != "" && box2.textContent != "" && box3.textContent != "") {
        gameOver(player=player);
    } else if (box1.textContent==box4.textContent && box4.textContent==box7.textContent && box1.textContent != "" && box4.textContent != "" && box5.textContent != "") {
        gameOver(player=player);
    } else if (box7.textContent==box8.textContent && box8.textContent==box9.textContent && box7.textContent != "" && box8.textContent != "" && box9.textContent != "") {
        gameOver(player=player);
    } else if (box4.textContent==box5.textContent && box5.textContent==box6.textContent && box4.textContent != "" && box5.textContent != "" && box6.textContent != "") {
        gameOver(player=player);
    } else if (box1.textContent==box5.textContent && box5.textContent==box9.textContent && box1.textContent != "" && box5.textContent != "" && box9.textContent != "") {
        gameOver(player=player);
    } else if (box3.textContent==box5.textContent && box5.textContent==box7.textContent && box3.textContent != "" && box5.textContent != "" && box7.textContent != "") {
        gameOver(player=player);
    } else if (box3.textContent==box6.textContent && box6.textContent==box9.textContent && box3.textContent != "" && box6.textContent != "" && box9.textContent != "") {
        gameOver(player=player);
    }
};

function checkPlayer() {
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");

    if (current_player == "Player 1") {
        player1.style.backgroundColor = "rgb(86, 203, 129)";
        player1.style.border = '3px solid black'
        player2.style.backgroundColor = "white";
        player2.style.border = '0px solid black'
    } else if (current_player == "Player 2") {
        player2.style.backgroundColor = "rgb(86, 203, 129)";
        player2.style.border = '3px solid black'
        player1.style.backgroundColor = "white";
        player1.style.border = '0px solid black'
    }

};
checkPlayer();

for (let x=0; x<box_list.length;x++) {
    box_list[x].addEventListener('mouseover', function () {
        if (box_list[x].textContent == "") {
            box_list[x].style.backgroundColor = 'rgb(86, 203, 129)';
        } else {
            box_list[x].style.backgroundColor = 'rgb(186, 62, 62)';
        }
    });

    box_list[x].addEventListener('mouseout', function () {
        box_list[x].style.backgroundColor = 'white';
    });

    box_list[x].addEventListener('click', function() {
        if (current_player == 'Player 1' && box_list[x].style.backgroundColor == 'rgb(86, 203, 129)') {
            box_list[x].textContent = "X";
            box_list[x].style.backgroundColor = 'rgb(186, 62, 62)';
            checkStatus(player=current_player);
            current_player = "Player 2";
            checkPlayer();
        } else if (current_player == 'Player 2' && box_list[x].style.backgroundColor == 'rgb(86, 203, 129)') {
            box_list[x].textContent = "O";
            box_list[x].style.backgroundColor = 'rgb(186, 62, 62)';
            checkStatus(player=current_player);
            current_player = "Player 1";
            checkPlayer();
        }
    });
};


const reset_btn = document.querySelector('#reset_btn')
reset_btn.addEventListener('click', function(){
    location.reload();
});


