let boby = document.getElementsByTagName('body');

let display_result = document.getElementById('display_result');
let btn = document.querySelectorAll('#box-btn');



let timer = document.getElementById('timer');
let modal = document.getElementById('mod');


let player_1 = document.getElementById('player-1');
let player_2 = document.getElementById('player-2');
let Draw = document.getElementById('drwa-game');

let score_div  =document.querySelectorAll('.score-btn');
let player_list = document.getElementById('player-list');


let resetbtn = document.getElementById('reset');



let p1_count = document.getElementById('p1-count');
let p2_count = document.getElementById('p2-count');
let draw_count = document.getElementById('drwa-count');


let player_1_score = 0;
let player_2_score = 0;
let d = 0;
       
let count = 0;







let audio = document.getElementById('aud');
let music = document.getElementById('icon-vol');

// (()=>{    
//     audio.setAttribute('src','./media/music.mp3');
// })();


let a_vol = 1;
music.addEventListener('click',(e)=>{

    
    e.stopPropagation();

    if(a_vol%2 ==  0){
        audio.volume = 0.0;
        music.setAttribute('src','./media/vol-off.png');
        a_vol++;
    }else{
        a_vol++;
        audio.volume = 1;
        music.setAttribute('src','./media/vol-on.png');
      
    }

})

function fun(btn_value) {

    Draw.style.background = '';
   
    if (count <= 9) {
        if (count % 2 == 0) {
            if (btn_value.innerText == "") {

                btn_value.innerText = 'O';
               
                audio.setAttribute('src','./media/move.mp3');
                btn_value.style.background = "#790252";
                btn_value.style.color = "#F5F5F5";

                player_1.style.background = '#790252';
                player_2.style.background = '';


                player_list.style= 'border: 4px solid #790252;'


                score_div[0].style.color =  score_div[1].style.color = '#F5F5F5'
                score_div[2].style.color =  score_div[3].style.color = '#790252'
                score_div[4].style.color =  score_div[5].style.color = '#790252'

                count++;
                if (count > 4) {
                    win();
                }
            }

        } else if (count % 2 != 0) {
            if (btn_value.innerText == "") {

                btn_value.innerText = 'X';
                audio.setAttribute('src','./media/move.mp3');
                btn_value.style.background = "#346751";
                btn_value.style.color = "#F5F5F5";

                player_1.style.background = '';
                player_2.style.background = '#346751';

                player_list.style= 'border: 4px solid #346751;'

                score_div[0].style.color =  score_div[1].style.color = '#346751'
                score_div[2].style.color =  score_div[3].style.color = '#F5F5F5'
                score_div[4].style.color =  score_div[5].style.color = '#346751'

                
                count++;
                if (count > 4) {
                    win();
                }
            }
        }
    }
}

let p = 0;
function reset() {

    
    let time = 5;
        
        if(time == 5){
            p = setInterval(()=>{
    
                timer.innerHTML = `Auto reset in <h1>${time}</h1>for Instant reset click on reset button`;
                timer.style.marginTop = '20px';
    
                time = time-1;
                if(time < -1){
                    
                    instant_reset();
                    
    
                }
            
            
            },1000)
                
        }
}

function instant_reset() {

    modal.classList.remove('modal');

    clearInterval(p);  
    
    display_result.innerHTML = `Tic-Tac-Toe`;
    display_result.style.color = '#F5F5F5';

    timer.innerHTML = '';

        btn.forEach((e) => {
            e.innerText = '';
            e.style.background = "";
            count = 0;
        });

    
        return;    

}



function win() {

    if ((btn[0].innerText == "O" && btn[1].innerText == 'O' && btn[2].innerText == 'O') ||
        (btn[3].innerText == "O" && btn[4].innerText == 'O' && btn[5].innerText == 'O') ||
        (btn[6].innerText == "O" && btn[7].innerText == 'O' && btn[8].innerText == 'O') ||
        (btn[0].innerText == "O" && btn[3].innerText == 'O' && btn[6].innerText == 'O') ||
        (btn[1].innerText == "O" && btn[4].innerText == 'O' && btn[7].innerText == 'O') ||
        (btn[2].innerText == "O" && btn[5].innerText == 'O' && btn[8].innerText == 'O') ||
        (btn[0].innerText == "O" && btn[4].innerText == 'O' && btn[8].innerText == 'O') ||
        (btn[2].innerText == "O" && btn[4].innerText == 'O' && btn[6].innerText == 'O')
    ) {
        display_result.innerHTML  = `<p> Player 1 Won the Game </p>`;
        modal.classList.toggle('modal');

        display_result.style.backgroundColor = "#790252";
        resetbtn.style = "border: 4px solid #790252;";
        player_1_score++;
        p1_count.innerText = player_1_score;
        timer.style.color = '#790252'

        audio.setAttribute('src','./media/win.mp3');

        display_result.style.color = '#FFFAE7';
        resetbtn.style.color = '#790252';

        reset();//auto reset with timer

    } else if (
        (btn[0].innerText == "X" && btn[1].innerText == 'X' && btn[2].innerText == 'X') ||
        (btn[3].innerText == "X" && btn[4].innerText == 'X' && btn[5].innerText == 'X') ||
        (btn[6].innerText == "X" && btn[7].innerText == 'X' && btn[8].innerText == 'X') ||
        (btn[0].innerText == "X" && btn[3].innerText == 'X' && btn[6].innerText == 'X') ||
        (btn[1].innerText == "X" && btn[4].innerText == 'X' && btn[7].innerText == 'X') ||
        (btn[2].innerText == "X" && btn[5].innerText == 'X' && btn[8].innerText == 'X') ||
        (btn[0].innerText == "X" && btn[4].innerText == 'X' && btn[8].innerText == 'X') ||
        (btn[2].innerText == "X" && btn[4].innerText == 'X' && btn[6].innerText == 'X')
    ) {
        display_result.innerHTML  = `<p> Player 2 Won the Game </p>`;
        modal.classList.toggle('modal');
        audio.setAttribute('src','./media/win.mp3');
        display_result.style.backgroundColor = "#346751";

        resetbtn.style = "border: 4px solid #346751;";
        display_result.style.color = '#F5F5F5';
        resetbtn.style.color = '#346751';
        timer.style.color = '#346751';

        player_2_score++;
        p2_count.innerText = player_2_score;
        
        reset();

    }
    else if(count == 9){

        display_result.innerHTML  = `<p> Game Draw </p>`;
        modal.classList.toggle('modal');
        display_result.style.backgroundColor = "#FF1E00";
        display_result.style.color = '#F5F5F5';
        d++;
        resetbtn.style = "border: 4px solid #FF1E00;";
        resetbtn.style.color = '#FF1E00';
        timer.style.color = '#FF1E00';
        draw_count.innerText = d;
        audio.setAttribute('src','./media/draw.mp3');
        timer.style.color = '#FF1E00'

        player_list.style= 'border: 4px solid #FF1E00;'

        score_div[0].style.color =  score_div[1].style.color = '#FF1E00'
        score_div[2].style.color =  score_div[3].style.color = '#FF1E00'
        score_div[4].style.color =  score_div[5].style.color = '#F5F5F5'

        
        Draw.style.background = '#FF1E00';

        player_1.style.background = '';
        player_2.style.background = '';

        reset();

    }

}
