const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector("body")
}
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const timer = {
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
       // this.isActive = true;
        this.intervalId = setInterval(() => {
            const min = 0;
            const max = colors.length - 1;
            let i = randomIntegerFromInterval(min, max);
  refs.body.style.backgroundColor = colors[i];
        }, 1000);
        refs.startBtn.disabled = true;
    },
    stop() {
        clearInterval(this.intervalId);
       // this.isActive = false;
        refs.startBtn.disabled = false;
    }
}
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));