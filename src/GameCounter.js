
/**
 * 追蹤計數數量，使數量趨向達標
 * 
 */

class GameCounterManager {

    constructor() {
        this.counters = [];
    }

    register(counter) {
        this.counters.push(counter);
    }

    unRegister(counter) {
        this.counters.splice(this.counters.indexOf(counter, 1));
    }


    loop(nowTime) {
        this.counters.forEach((counter) => {

            // Check if count does not arrive
            if (counter.count != counter.target) {

                if (counter.nextTime == 0) {
                    // Update NextTime
                    counter.setNextTime(nowTime + counter.interval);

                } else if (nowTime >= counter.nextTime) {
                    // Call _onAdd
                    counter._onAdd();

                    // Check if now arrive
                    if (counter.count == counter.target) {
                        // From not arrive to now arrive, call _onArrive
                        counter._onArrive();
                        // Clear NextTime
                        counter.setNextTime(0);

                    } else {
                        // Still not arrive, Update NextTime
                        counter.setNextTime(nowTime + counter.interval);
                    }
                }
            }
        });
    }
}


class CounterInterface {

    constructor(target, interval) {
        this.count = 0;
        this.target = target;
        this.interval = interval;
        this.nextTime = 0;
        this._onAdd = () => { };
        this._onArrive = () => { };
    }

    addCount(num) {
        this.count += num;
    }

    setCount(num) {
        this.count = num;
    }

    setTarget(num) {
        this.target = num;
    }

    setDelay(num) {
        this.interval = num;
    }

    setNextTime(time) {
        this.nextTime = time;
    }

    onAdd(callback) {
        this._onAdd = callback;
    }

    onArrive(callback) {
        this._onArrive = callback
    }
}

export { GameCounterManager, CounterInterface }