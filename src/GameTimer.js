
class GameTimerManager {
    constructor() {
        this.timers = [];
    }

    register(timer) {
        this.timers.push(timer);
    }

    unRegister(timer) {
        this.timers.splice(this.timers.indexOf(timer, 1));
    }


    loop(nowTime) {
        for (let i in this.timers) {
            let timer = this.timers[i];
            
            if (timer.nextTime == 0) {
                // First
                timer.nextTime = nowTime + timer.delay;
                
            } else if (nowTime >= timer.nextTime) {
                // On Time
                timer.nextTime = nowTime + timer.interval;
                timer._onTime();
            }

        }
    }
}

class GameTimer {
    constructor(delay, interval) {
        this.delay = delay;
        this.interval = interval;
        this.nextTime = 0;
        this._onTime = () => { };
    }

    onTime(callback) {
        this._onTime = callback;
    }

    setInterval(interval) {
        this.interval = interval;
    }
}

export { GameTimerManager, GameTimer }