// import {Howl, Howler} from './howler.js';
// var sound = new Howl({
//     src: ['sound.mp3']
// });
//
// sound.play();

let buttons = document.querySelectorAll('.buttons');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('start')) {
            timer.start();
        } else {
            timer.stop()
        }
    })
})

class Timer {
    constructor(selector = '#countDown', time) {
        this.box = document.querySelector(selector);
        this.time = time;
        this.interval;
        this.render()
    }

    render() {
        this.box.innerHTML = this.time
    }

    start() {
        this.interval = setInterval(() => {
            this.time--;
            this.box.innerHTML = this.time;

            if (this.time <= 0) {
                this.stop();
            }
        }, 1000)
    };

    stop() {
        clearInterval(this.interval)
    }
}

let timer = new Timer('#countDown', 10);
