class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");

    this.currentKick = "./allSounds/kick-heavy.wav";
    this.kickAudio = document.querySelector(".app__kickSound");

    this.currentSnare = "./allSounds/snare-analog.wav";
    this.snareAudio = document.querySelector(".app__snareSound");

    this.currentHiHat = "./allSounds/hihat-analog.wav";
    this.hihatAudio = document.querySelector(".app__hihatSound");

    this.currentPerc = "./allSounds/perc-heavy.wav";
    this.percAudio = document.querySelector(".app__percSound");

    this.currentShaker = "./allSounds/shaker-analog.wav";
    this.shakerAudio = document.querySelector(".app__shakerSound");

    this.playButton = document.querySelector(".app__playBtn");

    this.allSelects = document.querySelectorAll("select");

    this.index = 0;
    this.bpm = 140;
    this.isPlaying = null;
  }

  activePad() {
    this.classList.toggle("active");
  }

  repeat() {
    let step = this.index % 8; //when step's value equals to 8, it will reset to 0
    let activeBars = document.querySelectorAll(`.beat${step}`);
    activeBars.forEach((bar) => {
      // loop over each pad
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      // CHeck if pads are active
      if (bar.classList.contains("active")) {
        // Check each sound
        if (bar.classList.contains("kickpad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snarepad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihatpad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (bar.classList.contains("percpad")) {
          this.percAudio.currentTime = 0;
          this.percAudio.play();
        }
        if (bar.classList.contains("shakerpad")) {
          this.shakerAudio.currentTime = 0;
          this.shakerAudio.play();
        }
      }
    });
    this.index++;
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    // Check if its playing
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
      this.playButton.textContent = "Pause";
    } else {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
      this.playButton.textContent = "Play";
    }
  }

  changeSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        console.log(this.kickAudio.src);
        break;

      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;

      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;

      case "perc-select":
        this.percAudio.src = selectionValue;
        break;

      case "shaker-select":
        this.shakerAudio.src = selectionValue;
        break;
    }
  }
}

// Objects
const drumKit = new DrumKit();

// Event Listeners
drumKit.playButton.addEventListener("click", function () {
  drumKit.start();
});

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.allSelects.forEach((select) => {
  select.addEventListener("change", function (e) {
    drumKit.changeSound(e);
  });
});
