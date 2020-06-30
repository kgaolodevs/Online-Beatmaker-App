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
  }

  activePad() {
    this.classList.toggle("active");
  }

  repeat() {
    let step = this.index % 8; //when step's value equals to 8, it will reset to 0
    let activeBars = document.querySelectorAll(`.beat${step}`);
    console.log(activeBars);
    this.index++;
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

// Objects
const drumKit = new DrumKit();

// Event Listeners
drumKit.playButton.addEventListener("click", () => {
  drumKit.start();
});

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
});
