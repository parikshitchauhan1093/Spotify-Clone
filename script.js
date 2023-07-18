console.log("Welcome to Spotify!");
//intialise the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
        { songName: "Cheques ", filePath: "songs/1.mp3", coverPath: "images/The Flow.jpg" },
        { songName: "Dior ", filePath: "songs/2.mp3", coverPath: "images/The Flow.jpg" },
        { songName: "Ice  ", filePath: "songs/3.mp3", coverPath: "images/The Flow.jpg" },
        { songName: "OG ", filePath: "songs/4.mp3", coverPath: "images/The Flow.jpg" },
        { songName: "Ruthless ", filePath: "songs/5.mp3", coverPath: "images/The Flow.jpg" },
        { songName: "Still Rollin ", filePath: "songs/6.mp3", coverPath: "images/The Flow.jpg" },
        { songName: "The Flow ", filePath: "songs/7.mp3", coverPath: "images/The Flow.jpg" },
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play();
//Handling play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    // element.classList.add('fa-circle-pause');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/${index}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})