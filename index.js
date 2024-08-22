let songIndex =1;
let audioElement = new Audio(`./assets/${songIndex}.mp3`);


// creating array of songs
let songs = [
    {songName:'Harleys in Hawai',path:'./assets/1.mp3'},
    {songName:'My heart is Sterio',path:'./assets/2.mp3'},
    {songName:'Amplifier',path:'./assets/3.mp3'},
    {songName:'Mi Amor X Bohimia',path:'./assets/4.mp3'},
    {songName:'No se Da Quenta',path:'./assets/5.mp3'},
    {songName:'Attention',path:'./assets/6.mp3'},
    {songName:'Rockabay',path:'./assets/7.mp3'},
    {songName:'Con Calma',path:'./assets/8.mp3'},
    {songName:'Starboy',path:'./assets/9.mp3'}
];


// Mapping song names

let songList = Array.from(document.getElementsByClassName('songitem'));
songList.forEach((element,i)=>{
   
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Master Play

let masterPlay = document.getElementById('masterplay');
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});


// Updating the Seekbar

let myProgressBar = document.getElementById('myProgressBar');
myProgressBar.value=0;


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value=progress;
    if(audioElement.currentTime == audioElement.duration)
    {
        if(songIndex>=9)
        {
            songIndex=1;
        }
        else
        songIndex+=1;
        audioElement.src = `./assets/${songIndex}.mp3`
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
});

// now handeling forward and backward button
document.getElementById('forbutton').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=1;
    }
    else
    {
       songIndex+=1;
    }
    audioElement.src = `./assets/${songIndex}.mp3`
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
});

document.getElementById('backbutton').addEventListener('click',()=>{
    if(songIndex<=1)
    {
        songIndex=1;
    }
    else
    {
       songIndex-=1;
    }
    audioElement.src = `./assets/${songIndex}.mp3`
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
});

