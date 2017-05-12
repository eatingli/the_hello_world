
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

            if (timer.count != timer.target || timer.target 　== 0) {
                if (timer.nextTime == 0) {
                    // First
                    timer.nextTime = nowTime + timer.delay;

                } else if (nowTime >= timer.nextTime) {
                    // On Clock
                    timer.count += 1;
                    timer._onClick();

                    if (timer.target == timer.count) {
                        // Timer done
                        timer._onDone();
                    } else {
                        // Update
                        timer.nextTime = nowTime + timer.interval;
                    }
                }

            } else {
                // Timer be not used
            }
        }
    }
}

class GameTimer {
    constructor(interval, target) {
        this.delay = 0;
        this.interval = interval;
        this.target = target || 0;
        this.count = 0;
        this.nextTime = 0;
    }
}