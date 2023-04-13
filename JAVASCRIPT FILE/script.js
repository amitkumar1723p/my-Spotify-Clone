let songdata = [
  { cover: "covers/1.jpg", songname: "Sultan Film song" },
  { cover: "covers/2.jpg", songname: "Get Ready To Fight" },
  { cover: "covers/3.jpg", songname: "Lakshaya Song" },
  { cover: "covers/4.jpg", songname: "Yahan ke Hum Sikandar" },
  { cover: "covers/5.jpg", songname: "Chak De India" },
  { cover: "covers/6.jpg", songname: "SandeepMashwari Song" },
  { cover: "covers/7.jpg", songname: "Sandeep Maheshwari Song" },
  { cover: "covers/8.jpg", songname: "Chak Lein De" },
  { cover: "covers/1.jpg", songname: "Amitabh Bachchan audio" },
  { cover: "covers/9.jpg", songname: "Yahan ke Hum Sikander" },
  { cover: "covers/10.jpg", songname: "Dill Zidi hai" },
];
let songbox = document.getElementsByClassName("songbox");
Array.from(songbox).forEach(function (element, index) {
  let cover_image = element.getElementsByClassName("cover_image")[0];
  cover_image.src = songdata[index].cover;
  let song_name = element.getElementsByClassName("songName")[0];
  song_name.innerText = songdata[index].songname;
});

let default_audio = new Audio("Songs/song 1.mp3");

//    default_audio.play()
let index_value = 0;
console.log(index_value);

//    ALL HTML Element
let gif = document.getElementById("gif");
let progressbar = document.getElementById("progressbar");
let small_play_btn = document.getElementsByClassName("small-play-button");
let songlistgif = document.getElementsByClassName("songlistgif");
let displaysongname = document.getElementsByClassName("mucis-name")[0];
let min = document.querySelector(".minues");
let sec = document.querySelector(".second");
let minutes_zero = document.getElementById("minutes_zero");
let second_zero = document.getElementById("second_zero");
let music_timmer = document.getElementById("music-Timmer");
let music_timmer_minutes = document.getElementById("music-timmer-minutes");
let music_timmer_second = document.getElementById(
  "music-timmer-second-seconds"
);
let Add_zero_min = document.getElementById("Add-zero-min");
let Add_zero_sec = document.getElementById("Add-zero-sec");

sotifymusic = true;

let myInterval;

function music_timmer_function() {
  minutes = Math.floor(default_audio.duration / 60);
  second = Math.floor(default_audio.duration - minutes * 60);
  music_timmer_minutes.innerText = minutes;
  music_timmer_second.innerText = second;

  myInterval = setInterval(() => {
    if (music_timmer_second.innerText > 0) {
      music_timmer_second.innerText--;
    } else {
      music_timmer_second.innerText--;
      music_timmer_second.innerText = 59;

      minutefunction();
    }
  }, 1000);

  function minutefunction() {
    if (music_timmer_minutes.innerText != 0) {
      music_timmer_minutes.innerText--;
    } else {
      music_timmer_minutes.innerText = 0;

      music_timmer_second.innerText = 0;
    }
  }
}

function clearInterval_function() {
  clearInterval(myInterval);
}

function durationfunction() {
  minutes = Math.floor(default_audio.duration / 60);
  second = Math.floor(default_audio.duration - minutes * 60);
  min.innerText = minutes;
  sec.innerText = second;
}

let myname;
let allmusicplay_btn = document.getElementById("allmusicplay_btn");
allmusicplay_btn.addEventListener("click", function () {
  if (default_audio.paused || default_audio.currentTime == 0) {
    default_audio.play();
    setTimeout(() => {
      durationfunction();
    }, 150);

    if (
      music_timmer_minutes.innerText == 0 &&
      music_timmer_second.innerText == 0
    ) {
      music_timmer_function();
    } else {
      setTimeout(() => {
        music_timmer - second.innerText - 1;
        myname = setInterval(() => {
          if (music_timmer_second.innerText > 0) {
            music_timmer_second.innerText--;
          } else {
            music_timmer_second.innerText = 59;
            music_timmer_second.innerText--;
            minutefunction2();
          }
        }, 1000);
      }, 5);

      function minutefunction2() {
        if (music_timmer_minutes.innerText != 0) {
          music_timmer_minutes.innerText--;
        } else {
          music_timmer_minutes.innerText.innerText = 0;

          music_timmer_second.innerText.innerText = 0;
        }
      }
    }

    allmusicplay_btn.src = "icons/Pause button.svg";

    gif.style.opacity = 1;
    index_value = index_value - 1;
    index_value += 1;
    small_play_btn[index_value].src = "icons/Pause button.svg";

    setTimeout(() => {
      small_play_btn[index_value].src = "icons/playbutton.svg";
    }, 500);
    songlistgif[index_value].style.opacity = 1;

    displaysongname.innerText = songdata[index_value].songname;
  } else {
    default_audio.pause();
    clearInterval_function();
    clearInterval(myname);
    allmusicplay_btn.src = "icons/playbutton.svg";
    index_value = index_value - 1;
    index_value += 1;

    gif.style.opacity = 0;

    songlistgif[index_value].style.opacity = 0;
  }
});

//  addEventListener timaeupdate
default_audio.addEventListener("timeupdate", function () {
  let progressbarvalue =
    (default_audio.currentTime / default_audio.duration) * 100;
  progressbarvalue = parseInt(progressbarvalue);

  progressbar.value = progressbarvalue;
});

progressbar.addEventListener("change", function () {
  if (min.innerText != 0 && sec.innerText != 0) {
    default_audio.currentTime =
      (progressbar.value * default_audio.duration) / 100;

    default_audio.currentTime = parseInt(default_audio.currentTime);

    music_timmer_minutes.innerText = 0;
    music_timmer_second.innerText = 0;
    let duration = Math.floor(default_audio.duration);
    let currentTime = Math.floor(default_audio.currentTime);
    let progressbar_End_value = duration - currentTime;

    let minues = Math.floor(progressbar_End_value / 60);
    let second = Math.floor(progressbar_End_value - minues * 60);

    music_timmer_second.innerText = second;
    music_timmer_minutes.innerText = minues;
    setInterval(() => {
      if (second > 0) {
        second--;
      } else {
        second = 59;
        minutesfunction3();
      }
    }, 1000);

    function minutesfunction3() {
      if (minues != 0) {
        minues--;
      } else {
        minues = 0;

        second = 0;
      }
    }
  }
});

function amit() {
  Array.from(small_play_btn).forEach(function (element, index) {
    element.src = "icons/playbutton.svg";
  });
  songlistgif[index_value].style.opacity = 0;
}

Array.from(small_play_btn).forEach(function (element, index) {
  element.addEventListener("click", playsmall_btnsong);

  function playsmall_btnsong() {
    amit();

    index_value = parseInt(element.id);
    default_audio.src = `Songs/song ${index_value + 1}.mp3`;
    default_audio.play();

    setTimeout(() => {
      durationfunction();

      if (
        music_timmer_second.innerText == 0 &&
        music_timmer_minutes.innerText == 0
      ) {
        music_timmer_function();
      } else {
        clearInterval_function();
        clearInterval(myname);
        music_timmer_second.innerText = 0;
        music_timmer_minutes.innerText = 0;
        music_timmer_function();
      }
    }, 150);

    gif.style.opacity = 1;
    songlistgif[index_value].style.opacity = 1;

    element.src = "icons/Pause button.svg";

    allmusicplay_btn.src = "icons/Pause button.svg";

    setTimeout(() => {
      element.src = "icons/playbutton.svg";
    }, 500);

    displaysongname.innerText = songdata[index_value].songname;
  }
});

let arr = Array.from(small_play_btn);

next_button = document.getElementById("next-button");
next_button.addEventListener("click", function () {
  if (index_value >= 10) {
    amit();
    index_value = 0;

    default_audio.src = `Songs/song ${index_value + 1}.mp3`;
    console.log(index_value);
    default_audio.play();
    setTimeout(() => {
      durationfunction();

      if (
        music_timmer_second.innerText == 0 &&
        music_timmer_minutes.innerText == 0
      ) {
        music_timmer_function();
      } else {
        clearInterval_function();
        clearInterval(myname);
        music_timmer_second.innerText = 0;
        music_timmer_minutes.innerText = 0;
        music_timmer_function();
      }
    }, 150);
    arr[index_value].src = "icons/Pause button.svg";
    setTimeout(() => {
      arr[index_value].src = "icons/playbutton.svg";
    }, 500);
    allmusicplay_btn.src = "icons/Pause button.svg";

    gif.style.opacity = 1;
    songlistgif[index_value].style.opacity = 1;
    displaysongname.innerText = songdata[index_value].songname;
  } else {
    amit();
    index_value += 1;

    default_audio.src = `Songs/song ${index_value + 1}.mp3`;

    default_audio.play();
    setTimeout(() => {
      durationfunction();

      if (
        music_timmer_second.innerText == 0 &&
        music_timmer_minutes.innerText == 0
      ) {
        music_timmer_function();
      } else {
        clearInterval_function();
        clearInterval(myname);
        music_timmer_second.innerText = 0;
        music_timmer_minutes.innerText = 0;
        music_timmer_function();
      }
    }, 150);

    arr[index_value].src = "icons/Pause button.svg";
    setTimeout(() => {
      arr[index_value].src = "icons/playbutton.svg";
    }, 500);
    allmusicplay_btn.src = "icons/Pause button.svg";

    gif.style.opacity = 1;
    songlistgif[index_value].style.opacity = 1;
    displaysongname.innerText = songdata[index_value].songname;
  }
});

// previous songPlay
let previous_button = document.getElementById("previous-button");

previous_button.addEventListener("click", function () {
  if (index_value == 0) {
    amit();
    index_value = 10;
    default_audio.src = `Songs/song ${index_value}.mp3`;
    default_audio.play();
    setTimeout(() => {
      durationfunction();

      if (
        music_timmer_second.innerText == 0 &&
        music_timmer_minutes.innerText == 0
      ) {
        music_timmer_function();
      } else {
        clearInterval_function();
        clearInterval(myname);
        music_timmer_second.innerText = 0;
        music_timmer_minutes.innerText = 0;
        music_timmer_function();
      }
    }, 150);

    arr[index_value].src = "icons/Pause button.svg";
    allmusicplay_btn.src = "icons/Pause button.svg";

    setTimeout(() => {
      arr[index_value].src = "icons/playbutton.svg";
    }, 500);
    gif.style.opacity = 1;
    songlistgif[index_value].style.opacity = 1;
    displaysongname.innerText = songdata[index_value].songname;
  } else {
    amit();

    index_value -= 1;
    // console.log(index_value + 1);
    default_audio.src = `Songs/song ${index_value + 1}.mp3`;
    console.log(index_value);
    default_audio.play();
    setTimeout(() => {
      durationfunction();
      if (
        music_timmer_second.innerText == 0 &&
        music_timmer_minutes.innerText == 0
      ) {
        music_timmer_function();
      } else {
        clearInterval_function();
        clearInterval(myname);
        music_timmer_second.innerText = 0;
        music_timmer_minutes.innerText = 0;
        music_timmer_function();
      }
    }, 150);

    arr[index_value].src = "icons/Pause button.svg";
    allmusicplay_btn.src = "icons/Pause button.svg";
    setTimeout(() => {
      arr[index_value].src = "icons/playbutton.svg";
    }, 500);
    gif.style.opacity = 1;
    songlistgif[index_value].style.opacity = 1;

    displaysongname.innerText = songdata[index_value].songname;
  }
});

setInterval(() => {
  if (default_audio.duration == default_audio.currentTime) {
    gif = document.getElementById("gif");
    allmusicplay_btn.src = "icons/playbutton.svg";
    //   gif.style.display='none'
    gif.style.opacity = 0;

    displaysongname.innerHTML = "End of music ";
    songlistgif[index_value].style.opacity = 0;
    min.innerText = 0;
    sec.innerText = 0;
  }
}, 0);

//    automatic next song play

setInterval(() => {
  if (
    default_audio.paused &&
    default_audio.duration == default_audio.currentTime
  ) {
    if (index_value + 1 == 11) {
      amit();
      index_value = 0;

      default_audio.src = `Songs/song ${index_value + 1}.mp3`;
      default_audio.play();

      allmusicplay_btn.src = "icons/Pause button.svg";
      displaysongname.innerText = songdata[index_value].songname;
      songlistgif[index_value].style.opacity = 1;
      gif.style.opacity = 1;
    } else {
      amit();
      index_value += 1;

      default_audio.src = `Songs/song ${index_value + 1}.mp3`;
      default_audio.play();
      allmusicplay_btn.src = "icons/Pause button.svg";
      displaysongname.innerText = songdata[index_value].songname;
      songlistgif[index_value].style.opacity = 1;
      gif.style.opacity = 1;
    }

    setTimeout(() => {
      durationfunction();

      if (
        music_timmer_second.innerText == 0 &&
        music_timmer_minutes.innerText == 0
      ) {
        minutes = Math.floor(default_audio.duration / 60);
        second = Math.floor(default_audio.duration - minutes * 60);
        music_timmer_minutes.innerText = minutes;
        music_timmer_second.innerText = second;
      }
    }, 200);
  }
}, 1000);

// Add zerro in timmer minutes and second

setInterval(() => {
  if (music_timmer_second.innerText < 10) {
    second_zero.innerText = 0;

    second_zero.style.display = "inline";
  } else {
    second_zero.style.display = "none";
  }

  if (music_timmer_minutes.innerText < 10) {
    minutes_zero.innerText = 0;

    minutes_zero.style.display = "inline";
  } else {
    minutes_zero.style.display = "none";
  }
}, 0);

//   Add zero in mucis duration(minutes and second)

setInterval(() => {
  if (min.innerText < 10) {
    Add_zero_min.innerText = 0;

    Add_zero_min.style.display = "inline";
  } else {
    Add_zero_min.style.display = "none";
  }

  if (sec.innerText < 10) {
    Add_zero_sec.innerText = 0;

    Add_zero_sec.style.display = "inline";
  } else {
    Add_zero_sec.style.display = "none";
  }
}, 0);

// Navigation button

let navigation_button = document.querySelector(".navigation_button");
let navigation = document.querySelector(".navigation");
navigation_button.addEventListener("click", function () {
  navigation.classList.toggle("res-navigation");
  navigation.style.background = "black";
  navigation.style.transition = "all 0.2s ease-in";
});
