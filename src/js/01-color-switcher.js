const refs = {
  bgColorStartBtn: document.querySelector('button[data-start]'),
  bgColorStopBtn: document.querySelector('button[data-stop]'),
};

class Colorswitcher {
  constructor() {
    this.timerId = null;
  }
  start() {
    this.timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.bgColorStartBtn.disabled = true;
    refs.bgColorStopBtn.disabled = false;
  }
  stop() {
    clearInterval(this.timerId);
    refs.bgColorStartBtn.disabled = false;
    refs.bgColorStopBtn.disabled = true;
  }
}

const colorSwitcher = new Colorswitcher();

refs.bgColorStartBtn.addEventListener('click', colorSwitcher.start.bind(colorSwitcher));
refs.bgColorStopBtn.addEventListener('click', colorSwitcher.stop.bind(colorSwitcher));

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
