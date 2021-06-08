/* ----------------------------------------------------
    Code to test
   ---------------------------------------------------- */
let state = 0;
const counter = {
  add(value) {
    state += value;
  },
  getCount() {
    return state;
  },
};

const singleAdd = (counter) => {
  counter.add(10);
};

const multipleAdd = (counter) => {
  counter.add(15);
  counter.add(20);
};

/* ----------------------------------------------------
    Tests
   ---------------------------------------------------- */
// create a mockCounter with a fake add mthd which has no effect on value of count
test("singleAdd > jest.fn() toHaveBeenCalledWith() single call", () => {
  const mockCounter = {
    add: jest.fn(),
  };
  singleAdd(mockCounter);                  // call with fake counter
  expect(mockCounter.add).toHaveBeenCalledWith(10);// jest.fn() relays -been-called
});

// replace the add mthd with a spy
test("singleAdd > jest.spyOn() toHaveBeenCalledWith() single call", () => {
  const addSpy = jest.spyOn(counter, "add");
  singleAdd(counter);                     // call with real counter
  expect(addSpy).toHaveBeenCalledWith(10);// spy monitors -been-called  
  expect(counter.getCount()).toEqual(10); // counter value has been changed
});

test("multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls", () => {
  const mockCounter = {
    add: jest.fn(),
  };
  multipleAdd(mockCounter);
  // expect assertions are stacked 
  expect(mockCounter.add).toHaveBeenCalledWith(15);
  expect(mockCounter.add).toHaveBeenCalledWith(20);
});

test("multipleAdd > jest.fn() toHaveBeenCalledWith() multiple calls", () => {
  const addSpy = jest.spyOn(counter, "add");
  multipleAdd(counter);
  // expect assertions are stacked
  expect(addSpy).toHaveBeenCalledWith(15);
  expect(addSpy).toHaveBeenCalledWith(20);
});

// npm test to-have-been-called-with.test.js