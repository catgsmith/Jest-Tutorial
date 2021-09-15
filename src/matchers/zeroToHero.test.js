const pizzas = require("../data.json");
/* ----------------------------------------------------
    Tutorial : Testing with Jest: From zero to hero
    https://www.youtube.com/watch?v=NHMIn723hQY
   ---------------------------------------------------- */
// very basic test to notify the user if our pizza data has changed
it("the pizza data is correct", () => {
  // SNAPSHOT
  // changing data.json will mismatch with existing snapshot - Test Fails
  expect(pizzas).toMatchSnapshot(); // creates _snapshots_ dir here!

  expect(pizzas).toHaveLength(4);
  expect(pizzas.map((pizza) => pizza.name)).toEqual([
    "Chicago Pizza",
    "Neapolitan Pizza",
    "New York Pizza",
    "Sicilian Pizza",
  ]);
});

// let's test that each item in the pizza data has the correct properties
for (let i = 0; i < pizzas.length; i += 1) {
  it(`pizza[${i}] should have properties (id, name, image, desc, price)`, () => {
    expect(pizzas[i]).toHaveProperty("id");
    expect(pizzas[i]).toHaveProperty("name");
    expect(pizzas[i]).toHaveProperty("image");
    expect(pizzas[i]).toHaveProperty("desc");
    expect(pizzas[i]).toHaveProperty("price");
  });
}

it("mock implementation of a basic function", () => {
  const mock = jest.fn(() => "I am a mock function");
  expect(mock("Calling my mock function")).toBe("I am a mock function");
  expect(mock).toHaveBeenCalledWith("Calling my mock function");
});

it("mock return value one time", () => {
  const mock = jest.fn();
  mock.mockReturnValueOnce("Hello").mockReturnValueOnce("there!");

  mock();
  mock();

  expect(mock).toHaveBeenCalledTimes(2);

  mock("Hello", "there", "Gary");
  expect(mock).toHaveBeenCalledWith("Hello", "there", "Gary");
});

it("mock implementation of a function", () => {
  //const mock = jest.fn(() => 'Ireland'); // Same
  const mock = jest.fn().mockImplementation(() => "Ireland");

  expect(mock("Location")).toBe("Ireland");
  expect(mock).toHaveBeenCalledWith("Location");
});

it("spying using original implementation", () => {
  const pizza = {
    name: (n) => `Pizza name: ${n}`,
  };
  const spy = jest.spyOn(pizza, "name");

  expect(pizza.name("Florentine")).toBe("Pizza name: Florentine");
  expect(spy).toHaveBeenCalledWith("Florentine");
});

it("spying using mockImplementation", () => {
  const pizza = {
    name: (n) => `Pizza name: ${n}`,
  };
  const spy = jest.spyOn(pizza, "name");
  spy.mockImplementation((n) => "Crazy Pizza");

  expect(pizza.name("no-name")).toBe("Crazy Pizza"); // NOT: "Pizza name: Florentine"
  expect(spy).toHaveBeenCalledWith("no-name");

  // MOCK RESTORE
  spy.mockRestore(); // STOP using fake implementation for name
  expect(pizza.name("Florentine")).toBe("Pizza name: Florentine");
});

// let's test pizza return output
it("pizza returns new york pizza last", () => {
  const pizza1 = pizzas[0];
  const pizza2 = pizzas[1];
  const pizza3 = pizzas[2];
  // projector function extracting just the name from each object
  const pizza = jest.fn((currentPizza) => currentPizza.name);

  pizza(pizza1); // chicago pizza
  pizza(pizza2); // neapolitan pizza
  pizza(pizza3); // new york pizza

  expect(pizza).toHaveLastReturnedWith("New York Pizza");
});

// let's match some data against our object
it("pizza data has new york pizza and matches as an object", () => {
  const newYorkPizza = {
    id: 3,
    name: "New York Pizza",
    image: "/images/ny-pizza.jpg",
    desc: "New York-style pizza has slices that are large and wide with a thin crust that is foldable yet crispy. It is traditionally topped with tomato sauce and mozzarella cheese.",
    price: 8,
  };
  expect(pizzas[2]).toMatchObject(newYorkPizza);
});

// async example, always return a promise (can switch out resolves with reject)
it("expect a promise to resolve", async () => {
  const user = {
    getFullName: jest.fn(() => Promise.resolve("Karl Hadwen")),
  };
  await expect(user.getFullName("Karl Hadwen")).resolves.toBe("Karl Hadwen");
});

it("expect a promise to reject", async () => {
  const user = {
    getFullName: jest.fn(() =>
      Promise.reject(new Error("Something went wrong"))
    ),
  };
  // toTHROW (not toBe)
  await expect(user.getFullName("Karl Hadwen")).rejects.toThrow(
    "Something went wrong"
  );
});

// npm test zeroToHero.test
