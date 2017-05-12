

/**
 * 計數物件數量，有缺則補
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
        for (let counter in this.counters) {

            let isNotArrived = counter.count < counter.target;

            if (isNotArrived && nowTime >= counter.trigger) {

                // _onAdd
                counter._onAdd();

                // Check if now arrive
                if (isNotArrived && counter.count == counter.target) {
                    // From not arrive to now arrive, call _onArrive
                    counter._onArrive();
                } else {
                    // Still not arrive, Update Tigger
                    counter.setTrigger(nowTime + counter.delay);
                }

            }
        }
    }
}


class CounterInterface {

    constructor() {
        this.count = 0;
        this.target = 0;
        this.delay = 0;
        this.trigger = 0;
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
        this.delay = num;
    }

    setTrigger(time) {
        this.trigger = time;
    }

    onAdd(callback) {
        this._onAdd = callback;
    }

    onArrive(callback) {
        this._onArrive = callback
    }
}