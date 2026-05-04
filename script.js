// ================= SONGS =================
let songs = [
  {name:"Top Fella", artist:"Karan Aujla,Mxrci", img:"Topfella.jpg", file:"Top Fella.mp3"},
  {name:"Eyes on Me", artist:"Sidhu Moose Wala,The Kid", img:"Eyesonme.jpg", file:"Eyes on Me.mp3"},
  {name:"WOW (From Hai jawani toh ishq...)", artist:"Harrdy sandhu,Tanishq Baghchi", img:"wow.jpg", file:"WOW.mp3"},
  {name:"Majboor", artist:"Sheheryaar Rehan,Zoha Waseem", img:"Majboor.png", file:"Majboor.mp3"},
  {name:"Believer", artist:"Imagine Dragons", img:"Believer.jpg", file:"believer.mp3"},
  {name:"Legends Never Die", artist:"Alex Seaver", img:"Legendsneverdie.jpg", file:"Legendsneverdie.mp3"},
  {name:"Tum Hi Ho", artist:"Arijit Singh", img:"Tumhiho.jpg", file:"Tum Hi Ho.mp3"},
  {name:"Samajavaragamana", artist:"A.R. Rahman", img:"Samajavaragamana.jpg", file:"Samajavaragamana.mp3"},
  {name:"Oorumblood", artist:"Sai Abhyankkar", img:"Oorumblood.jpg", file:"Oorum Blood.mp3"},
];

let cards = document.getElementById("cards");
let audio = document.getElementById("audio");
let songName = document.getElementById("songName");
let playBtn = document.getElementById("playBtn");
let progress = document.getElementById("progress");

let currentSong = 0;

// LOAD SONG CARDS
songs.forEach((song, index) => {
  cards.innerHTML += `
    <div class="card" onclick="playSong(${index})">
      <img src="${song.img}">
      <h4>${song.name}</h4>
      <p>${song.artist}</p>
    </div>
  `;
});

// PLAY SONG
function playSong(index) {
  currentSong = index;
  audio.src = songs[index].file;
  audio.play();
  songName.innerText = songs[index].name;
  playBtn.innerText = "⏸";
}

// PLAY / PAUSE
function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
}

// NEXT
function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  playSong(currentSong);
}

// PREVIOUS
function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  playSong(currentSong);
}

// PROGRESS BAR UPDATE
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

// SEEK
progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});


// ================= ARTISTS =================
let artists = [
  {name:"Arijit Singh", img:"Arijit singh.jpg"},
  {name:"Anirudh Ravichander", img:"AnirudhRavichander.jpg"},
  {name:"Shreya Ghoshal", img:"SheryaGhoshal.jpg"},
  {name:"Atif Aslam", img:"AtifAslam.jpg"},
  {name:"Neha Kakkar", img:"NehaKakkar.jpg"},
  {name:"Badshah", img:"Badshah.jpg"},
  {name:"Alan Walker", img:"AlanWalker.jpg"},
  {name:"Weekend", img:"Weekend.jpg"},
  {name:"Sidhu Moose Wala", img:"Sidhumoosewala.jpg"}
];

let artistContainer = document.getElementById("artists");

if (artistContainer) {
  artists.forEach(a => {
    artistContainer.innerHTML += `
      <div class="artist">
        <img src="${a.img}">
        <p>${a.name}</p>
      </div>
    `;
  });
}


// ================= ALBUMS =================
let albums = [
  {name:"Aashiqui 2", img:"Aashiqui2.jpg"},
  {name:"Ye Jawaniyan", img:"yejawaniyedeewani.jpg"},
  {name:"Sanam Teri Kasam", img:"Sanamterikasam.jpg"},
  {name:"Finding Her", img:"Findingher.jpg"},
  {name:"Young G.O.A.T", img:"younggoat.jpg"},
  {name:"Raanjhan", img:"Raanjhan.jpg"}, 
];

let albumContainer = document.getElementById("albums");

if (albumContainer) {
  albums.forEach(a => {
    albumContainer.innerHTML += `
      <div class="card">
        <img src="${a.img}">
        <h4>${a.name}</h4>
      </div>
    `;
  });
}


// ================= RADIO =================
let radio = [
  {name:"Arijit Singh", img:"Arijitsinghradio.jpg"},
  {name:"KK", img:"KK.jpg"},
  {name:"Shreya Ghoshal", img:"Shreyaghoshalradio.jpg"},
  {name:"Alka Yagnik", img:"AlkaYagnikradio.jpg"},
  {name:"Diljit Dosanjh", img:"DiljitDosanjhradio.jpg"},
  {name:"A.R. Rahman", img:"Arrahmanradio.jpg"},
];

let radioContainer = document.getElementById("radio");

if (radioContainer) {
  radio.forEach(r => {
    radioContainer.innerHTML += `
      <div class="card">
        <img src="${r.img}">
        <h4>${r.name}</h4>
      </div>
    `;
  });
}


// ================= CHARTS =================
let charts = [
  {name:"Top Songs", img:"Topsongs.jpg"},
  {name:"Global Hits from India", img:"TopsongsIndia.jpg"},
  {name:"Trending", img:"Top50global.jpg"},
  {name:"India's top 50", img:"Top50India.jpg"},
  {name:"Viral 50", img:"Viral50.jpg"},  
];

let chartContainer = document.getElementById("charts");

if (chartContainer) {
  charts.forEach(c => {
    chartContainer.innerHTML += `
      <div class="card">
        <img src="${c.img}">
        <h4>${c.name}</h4>
      </div>
    `;
  });
}