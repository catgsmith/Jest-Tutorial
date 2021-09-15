/* ----------------------------------------------------
    Code to test
   ---------------------------------------------------- */
const myObject = {
  doSomething() {
    console.log("I HAVE BEEN INVOKED");
  },
};


/* ----------------------------------------------------
    Tests
   ---------------------------------------------------- */
   
// Assertions for a spy/mock/stub
// ----------------------------------------------------------
it("stub .toBeCalled()", () => {
  const stub = jest.fn();
  stub();
  expect(stub).toBeCalled(); // was the stub/spy called?
});

// Call the actual function RESULT: console.log I HAVE BEEN INVOKED
// ----------------------------------------------------------
it("spyOn .toBeCalled()", () => {
  const somethingSpy = jest.spyOn(myObject, "doSomething");
  myObject.doSomething();
  expect(somethingSpy).toBeCalled();
});

// In order to replace the spy’s implementation, we can use the stub/spy .mockImplementation() 
// or any of the mockReturnValue/mockResolvedValue functions.


// mock Implementation - to replace a spied-on function’s implementation
// ----------------------------------------------------------
it("spyOn().mockImplementation()", () => {
  const somethingSpy = jest.spyOn(myObject, "doSomething").mockImplementation();
  myObject.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});

//mock Return Value - to replace a spied-on function’s implementation
// ----------------------------------------------------------
it("spyOn().mockReturnValue()", () => {
  const somethingSpy = jest.spyOn(myObject, "doSomething").mockReturnValue();
  myObject.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});

// npm test spy-mock-implementation.test
