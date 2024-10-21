const btnR=document.querySelector('.Rock');
const btnP=document.querySelector('.Paper');
const btnS=document.querySelector('.Scissors');
let player=JSON.parse(localStorage.getItem('player'))||{
    win:0,
    loss:0,
    Tie:0

   };
   let autoplaying=false;
   let intervalId;
/* if(!player){
   player={
    win:0,
    loss:0,
    Tie:0

   };
 }*/
 console.log(JSON.stringify(player));

  let comp=['Rock','Paper','Scissors'];
  let comv;
  function changedata(compu,players,result){
    let compi=document.querySelector(`.${compu}`).innerHTML;
    console.log(compi);
    let playe=document.querySelector(`.${players}`).innerHTML;
    console.log(playe);
      document.querySelector('.result').innerHTML=result;
      document.querySelector('.summary').innerHTML=`computer choose ${compi} You choose ${playe}`;
      document.querySelector('.data').innerHTML=`wins :${player.win} loss:${player.loss} Ties:${player.Tie}`;


  }
  const funRock=()=>{
    console.log('rock');
let final;
compv=comp[Math.floor(Math.random()*comp.length)];
 console.log(compv);
 if(compv==='Scissors'){
    player.win=player.win+1;
     final='You Won';
    alert(`it picked ${compv} you won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
  }else if(compv==='Paper'){
    player.loss=player.loss+1;
    final='You loss';
    alert(`it picked ${compv} computer won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
  }else{
    final='Game Tie';
    player.Tie=player.Tie+1;
    alert(`continue the game wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
  }
  changedata(compv,'Rock',final);
  localStorage.setItem('player',JSON.stringify(player));
};
  btnR.addEventListener('click',funRock);
 const funPaper=()=>{
    let finals;
    compv=comp[Math.floor(Math.random()*comp.length)];
    console.log(compv);
      if(compv==='Rock'){
       finals='You won';
       player.win=player.win+1;
       alert(`it picked ${compv} you won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
     }else if(compv==='Scissors'){
       finals='You Loss';
       player.loss=player.loss+1;
       alert(`it picked ${compv} computer won  wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
     }else{
       player.Tie=player.Tie+1;
       finals='Game Tie';
       alert(`continue the game  wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
     }
     changedata(compv,'Paper',finals);
     localStorage.setItem('player',JSON.stringify(player));
    };
btnP.addEventListener('click',funPaper);
const funScissor=()=>{
  let finalss;
  compv=comp[Math.floor(Math.random()*comp.length)];
  console.log(compv);
   if(compv==='Paper'){
    finalss='You Won';
    player.win=player.win+1;
    alert(`it picked ${compv} you won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
  }else if(compv==='Rock'){
    player.loss=player.loss+1;
    finalss='you loss';
    alert(`it picked ${compv} computer won  wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
    
  }else{
    player.Tie=player.Tie+1;
    finalss='Game tie';
    alert(`continue the game wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
  }
  changedata(compv,'Scissors',finalss);
  localStorage.setItem('player',JSON.stringify(player));
  };
btnS.addEventListener('click',funScissor);
const Resets=()=>{
    player.win=0;
    player.loss=0;
    player.Tie=0;
    alert(`Game has been reset wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
    reset();
    localStorage.setItem('player',JSON.stringify(player))
};
document.querySelector('.reset').addEventListener('click',()=>{
    document.querySelector('.resetdata').innerHTML='<p>Are u sure to reset <button class="yes">yes</button> <button class="no">no</button></p>';
    document.querySelector('.yes').addEventListener('click',()=>{
        Resets();
        document.querySelector('.resetdata').innerHTML='';

    });
    document.querySelector('.no').addEventListener('click', ()=>{
    document.querySelector('.resetdata').innerHTML='';
});
});
const PlayAuto=()=>{   
    if(!autoplaying){
       document.querySelector('.Auto').innerText='Stop';
   intervalId= setInterval( () => {
       autoplay();
    },4000);
    autoplaying=true;
   }else{
  
       clearInterval(intervalId);
       document.querySelector('.Auto').innerText='AutoPlay';
       autoplaying=false;
       
   }
  }
document.querySelector('.Auto').addEventListener('click',PlayAuto);
document.body.addEventListener('keydown',(event)=>{
    console.log(event.key);
  if(event.key==='r'){
   funRock();
  }else if(event.key==='p'){
    funPaper();

  }else if(event.key==='s'){
     funScissor();
  }else if(event.key==='a'){
    PlayAuto();
  }else if(event.key==='Backspace'){
    document.querySelector('.resetdata').innerHTML='<p>Are u sure to reset <button class="yes">yes</button> <button class="no">no</button></p>';
    document.querySelector('.yes').addEventListener('click',()=>{
        Resets();
        document.querySelector('.resetdata').innerHTML='';

    });
    document.querySelector('.no').addEventListener('click', ()=>{
    document.querySelector('.resetdata').innerHTML='';
});
  }
});
  function reset(){
      document.querySelector('.result').innerHTML='';
      document.querySelector('.summary').innerHTML='';
      document.querySelector('.data').innerHTML='';
  }
  function autoplay(){
    let computer=comp[Math.floor(Math.random()*comp.length)];
    let players=comp[Math.floor(Math.random()*comp.length)];
    console.log(computer);
    console.log(players)
    let final;
    if(players==='Rock'){
     if(computer==='Scissors'){
        player.win=player.win+1;
         final='You Won';
        alert(`it picked ${computer} you won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
      }else if(computer==='Paper'){
        player.loss=player.loss+1;
        final='You loss';
        alert(`it picked ${computer} computer won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
      }else{
        final='Game Tie';
        player.Tie=player.Tie+1;
        alert(`continue the game wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
      }
      console.log(final);
      changedata(computer,players,final);
      localStorage.setItem('player',JSON.stringify(player));
    }else if(players==='Paper'){
        if(computer==='Rock'){
            final='You won';
            player.win=player.win+1;
            alert(`it picked ${computer} you won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
          }else if(computer==='Scissors'){
            final='You Loss';
            player.loss=player.loss+1;
            alert(`it picked ${computer} computer won  wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
          }else{
            player.Tie=player.Tie+1;
            final='Game Tie';
            alert(`continue the game  wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
          }
          console.log(final);
          changedata(computer,players,final);
          localStorage.setItem('player',JSON.stringify(player));
    }else{
        if(computer==='Paper'){
            final='You Won';
            player.win=player.win+1;
            alert(`it picked ${computer} you won wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
          }else if(computer==='Rock'){
            player.loss=player.loss+1;
            final='you loss';
            alert(`it picked ${computer} computer won  wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
            
          }else{
            player.Tie=player.Tie+1;
            final='Game tie';
            alert(`continue the game wins :${player.win} loss:${player.loss} Ties:${player.Tie}`);
          }
          console.log(final);
          changedata(computer,players,final);
          localStorage.setItem('player',JSON.stringify(player));
    }
  }