/* ----------------------------------------------------
    Code to test
   ---------------------------------------------------- */
let count = 0;
const counter = {
  increment() {
    console.log('invoked increment');
    count += 1;
  },
  getCount() {
    return count;
  },
};
// app function takes a counter and calls its increment mthd
const app = (counter) => {
  counter.increment();
};

/* ----------------------------------------------------
    Tests - why would we use a complete mock vs a spy?
    The main difference is that the mockCounter version wouldn’t allow the counter to increment.
   ---------------------------------------------------- */

// create a mockCounter with a fake increment mthd which has no effect on value of count 
// NO console.log 'invoked increment' 
it("app() with mock counter .toHaveBeenCalledTimes(1)", () => {
  const mockCounter = {
    increment: jest.fn(),  // make fake increment method
  };
  app(mockCounter);                          // call with fake counter
  app(mockCounter);
  expect(mockCounter.increment).toHaveBeenCalledTimes(2);// jest.fn() relays -been-called
  expect(counter.getCount()).not.toEqual(2); // NOT Expected: 2 Received: 0
});

// replace the increment mthd with a spy
// TWICE console.log 'invoked increment' 
it("app() with jest.spyOn(counter) toHaveBeenCalledTimes(1)", () => {
  const incrementSpy = jest.spyOn(counter, "increment");
  app(counter);                                 // call with real counter
  app(counter);
  expect(incrementSpy).toHaveBeenCalledTimes(2);// spy monitors -been-called 
  expect(counter.getCount()).toEqual(2);
}); 

// npm test to-have-been-called-times.test.js
