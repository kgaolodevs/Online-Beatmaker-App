class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".app__kickSound");
    this.snareAudio = document.querySelector(".app__snareSound");
    this.hihatAudio = document.querySelector(".app__hihatSound");
    this.percAudio = document.querySelector(".app__percSound");
    this.shakerAudio = document.querySelector(".app__shakerSound");
    this.playButton = document.querySelector(".app__playBtn");
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
