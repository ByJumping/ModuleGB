import 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.js';
let sound = null;
let buttons = document.querySelectorAll('.buttons');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        sound = new Howl({
            src: ['sound.mp3']
        });
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
        this.render();
    }

    render() {
        this.box.innerHTML = this.time
    }

    start() {
        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.time--;
            this.box.innerHTML = this.time;

            if (this.time <= 0) {
                this.stop();
                sound.play()
            }
        }, 1000)
    };

    stop() {
        clearInterval(this.interval)
    }
}

let timer = new Timer('#countDown', 10);

