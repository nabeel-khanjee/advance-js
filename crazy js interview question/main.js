function Counter() {

    var count = 0;
    this.incrementCounter = () => {
        count++;
        console.log(count);
    };
    this.drcrementCounter = () => {
        count--;
        console.log(count);
    };

}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.drcrementCounter();
counter1.drcrementCounter();
counter1.drcrementCounter();
counter1.drcrementCounter();
counter1.drcrementCounter();
// disadvantages of Clousers
// memory over consumption
// Garbage collector
// freez unutilized memory