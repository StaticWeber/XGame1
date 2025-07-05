const gamecontainer = document.getElementById('game-container');
const logo = document.getElementById('logo')
const navBar = document.getElementsByClassName('nav-bar')
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const video5 = document.getElementById('video5');
const logout = document.getElementById('logout');
const videoSource1 = document.getElementById('videoSource1');
const style1Button = document.getElementById('style1-button');
const style2Button = document.getElementById('style2-button');
const style3Button = document.getElementById('style3-button');
const style4Button = document.getElementById('style4-button');
const startbutton = document.getElementById('startbutton');
const buttonContainer = document.getElementById('button-container');
const gameStart = document.getElementById('game-start');
const waitMsg = document.getElementById('wait');
const riskMsg = document.getElementById('risk');
const firstSpan = document.getElementById('first-span');
const secondSpan = document.getElementById('second-span');
const thirdSpan = document.getElementById('third-span');
const loading = document.getElementById('loading');
const warning = document.getElementById('warning');
const refreshtoken = localStorage.getItem('token');

gamecontainer.style.display = 'none';
logo.style.display = 'none';
navBar[0].style.display = 'none';
video2.style.display = 'none';
video3.style.display = 'none';
video4.style.display = 'none';
video5.style.display = 'none';
waitMsg.style.display = 'none';
riskMsg.style.display = 'none';
firstSpan.style.display = 'none';
secondSpan.style.display = 'none';
thirdSpan.style.display = 'none';
loading.style.display = 'none';
warning.style.display = 'none';


function Game(){


   setTimeout(() => {
   gamecontainer.style.display = 'flex';
}, 4000);


setTimeout(() => {
    window.alert('game over');
    gamecontainer.style.display = 'none';
    window.location.href = 'game.html'
}, 200000)


}

Game();


style1Button.disabled = true;
style2Button.disabled = true;
style3Button.disabled = true;
style4Button.disabled = true;
style1Button.style.backgroundColor = 'grey';
style2Button.style.backgroundColor = 'grey';
style3Button.style.backgroundColor = 'grey';
style4Button.style.backgroundColor = 'grey';



startbutton.addEventListener('click', () => {
     video1.play();
     video2.pause();
     video3.pause();
     video4.pause();
     video5.pause();
 //  video1.muted = false;
 //  video2.muted = true;
  startbutton.disabled = true;
  startbutton.style.display = 'none';
  startbutton.style.backgroundColor = 'grey';
  style1Button.style.display = 'none';
  style2Button.style.display = 'none';
  style3Button.style.display = 'none';
  style4Button.style.display = 'none';

  setTimeout(() => {
  style1Button.disabled = false;
  style2Button.disabled = false;
  style3Button.disabled = false;
  style4Button.disabled = false;
  style1Button.style.backgroundColor = 'purple';
  style2Button.style.backgroundColor = 'green';
  style3Button.style.backgroundColor = 'red';
  style4Button.style.backgroundColor = 'blue';
  style1Button.style.display = 'block';
  style2Button.style.display = 'block';
  style3Button.style.display = 'block';
  style4Button.style.display = 'block';
}, 3000)
 
});


style1Button.addEventListener('click', () => {
    video1.style.display = 'none';
    video2.style.display = 'flex';
    video3.style.display = 'none';
    video4.style.display = 'none';
    video5.style.display = 'none';
    video5.pause();
    video4.pause();
    video3.pause();
    video2.play();
    video1.pause();

 // video2.muted = false;
 // video1.muted = true;
    style1Button.disabled = true;
    style2Button.disabled = true;
    style3Button.disabled = true;
    style4Button.disabled = true;
    style1Button.style.backgroundColor = 'grey';
    style2Button.style.backgroundColor = 'grey';
    style3Button.style.backgroundColor = 'grey';
    style4Button.style.backgroundColor = 'grey';
    style1Button.style.display = 'none'
    style2Button.style.display = 'none'
    style3Button.style.display = 'none'
    style4Button.style.display = 'none'

    setTimeout(() => {
    style1Button.disabled = false;
    style2Button.disabled = false;
    style3Button.disabled = false;
    style4Button.disabled = false;
    style1Button.style.backgroundColor = 'purple';
    style2Button.style.backgroundColor = 'green';
    style3Button.style.backgroundColor = 'red';
    style4Button.style.backgroundColor = 'blue';
    style1Button.style.display = 'block';
    style2Button.style.display = 'block';
    style3Button.style.display = 'block';
    style4Button.style.display = 'block';
    video5.style.display = 'none';
    video4.style.display = 'none';
    video3.style.display = 'none';
    video2.style.display = 'none';
    video1.style.display = 'flex';
    video1.play();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();

 // video1.muted = false;
 // video2.muted = true;

}, 5000);

  
});


style2Button.addEventListener('click', () => {
    video1.style.display = 'none';
    video2.style.display = 'none';
    video3.style.display = 'flex'
    video4.style.display = 'none';
    video5.style.display = 'none';
    video5.pause();
    video4.pause();
    video3.play();
    video2.pause();
    video1.pause();
   

 // video2.muted = false;
 // video1.muted = true;

    style1Button.disabled = true;
    style2Button.disabled = true;
    style3Button.disabled = true;
    style4Button.disabled = true;
    style1Button.style.backgroundColor = 'grey';
    style2Button.style.backgroundColor = 'grey';
    style3Button.style.backgroundColor = 'grey';
    style4Button.style.backgroundColor = 'grey';
    style1Button.style.display = 'none';
    style2Button.style.display = 'none';
    style3Button.style.display = 'none';
    style4Button.style.display = 'none';

    setTimeout(() => {
    style1Button.disabled = false;
    style2Button.disabled = false;
    style3Button.disabled = false;
    style4Button.disabled = false;
    style1Button.style.backgroundColor = 'purple';
    style2Button.style.backgroundColor = 'green';
    style3Button.style.backgroundColor = 'red';
    style4Button.style.backgroundColor = 'blue';
    style1Button.style.display = 'block';
    style2Button.style.display = 'block';
    style3Button.style.display = 'block';
    style4Button.style.display = 'block';
    video5.style.display = 'none';
    video4.style.display = 'none';
    video3.style.display = 'none';
    video2.style.display = 'none';
    video1.style.display = 'flex';
    video1.play();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();

 // video1.muted = false;
 // video2.muted = true;

}, 5000);

  
});



style3Button.addEventListener('click', () => {
    video1.style.display = 'none';
    video2.style.display = 'none';
    video3.style.display = 'none'
    video4.style.display = 'flex';
    video5.style.display = 'none';
    video5.pause();
    video4.play();
    video3.pause();
    video2.pause();
    video1.pause();
   

 // video2.muted = false;
 // video1.muted = true;

    style1Button.disabled = true;
    style2Button.disabled = true;
    style3Button.disabled = true;
    style4Button.disabled = true;
    style1Button.style.backgroundColor = 'grey';
    style2Button.style.backgroundColor = 'grey';
    style3Button.style.backgroundColor = 'grey';
    style4Button.style.backgroundColor = 'grey';
    style1Button.style.display = 'none';
    style2Button.style.display = 'none';
    style3Button.style.display = 'none';
    style4Button.style.display = 'none';

    setTimeout(() => {
    style1Button.disabled = false;
    style2Button.disabled = false;
    style3Button.disabled = false;
    style4Button.disabled = false;
    style1Button.style.backgroundColor = 'purple';
    style2Button.style.backgroundColor = 'green';
    style3Button.style.backgroundColor = 'red';
    style4Button.style.backgroundColor = 'blue';
    style1Button.style.display = 'block';
    style2Button.style.display = 'block';
    style3Button.style.display = 'block';
    style4Button.style.display = 'block';
    video5.style.display = 'none';
    video4.style.display = 'none';
    video3.style.display = 'none';
    video2.style.display = 'none';
    video1.style.display = 'flex';
    video1.play();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();

 // video1.muted = false;
 // video2.muted = true;

}, 6400);

  
});




style4Button.addEventListener('click', () => {
    video1.style.display = 'none';
    video2.style.display = 'none';
    video3.style.display = 'none'
    video4.style.display = 'none';
    video5.style.display = 'flex';
    video5.play();
    video4.pause();
    video3.pause();
    video2.pause();
    video1.pause();
   

 // video2.muted = false;
 // video1.muted = true;

    style1Button.disabled = true;
    style2Button.disabled = true;
    style3Button.disabled = true;
    style4Button.disabled = true;
    style1Button.style.backgroundColor = 'grey';
    style2Button.style.backgroundColor = 'grey';
    style3Button.style.backgroundColor = 'grey';
    style4Button.style.backgroundColor = 'grey';
    style1Button.style.display = 'none';
    style2Button.style.display = 'none';
    style3Button.style.display = 'none';
    style4Button.style.display = 'none';

    setTimeout(() => {
    style1Button.disabled = false;
    style2Button.disabled = false;
    style3Button.disabled = false;
    style4Button.disabled = false;
    style1Button.style.backgroundColor = 'purple';
    style2Button.style.backgroundColor = 'green';
    style3Button.style.backgroundColor = 'red';
    style4Button.style.backgroundColor = 'blue';
    style1Button.style.display = 'block';
    style2Button.style.display = 'block';
    style3Button.style.display = 'block';
    style4Button.style.display = 'block';
    video5.style.display = 'none';
    video4.style.display = 'none';
    video3.style.display = 'none';
    video2.style.display = 'none';
    video1.style.display = 'flex';
    video1.play();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();

 // video1.muted = false;
 // video2.muted = true;

}, 5000);

  
});



async function Wassup(){
    
    try{
  const accesstoken = localStorage.getItem('user');
    if(accesstoken){
        console.log('Wassup from game')
    } else{
        console.log('Error')
    }

    } catch(error){
        console.error(error)
    }
}


 Wassup()

 



