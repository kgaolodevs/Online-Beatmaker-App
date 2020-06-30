class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".app__kickSound");
    this.snareAudio = document.querySelector(".app__snareSound");
    this.hihatAudio = document.querySelector(".app__hihatSound");
    this.percAudio = document.querySelector(".app__percSound");
    this.shakerAudio = document.querySelector(".app__shakerSound");
    this.index = 0;
  }

  repeat() {
    let step = this.index % 8; //when step's value equals to 8, it will reset to 0
    console.log(step);
    this.index++;
  }

  start() {
    setInterval(() => {
      this.repeat();
    }, 1000);
  }
}

const drumKit = new DrumKit();
// drumKit.start();
