const functions = require("./functions");
//
// % npm test functions.test
// Jest Crash Course - Unit Testing in JavaScript Tutorial https://www.youtube.com/watch?v=7r4xVDI2vho

// USING MATCHERS
describe("using matchers", () => {
  // toBe
  it("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
  });

  // not
  it("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
  });

  it("Should be null", () => {
    expect(functions.isNull()).toBeNull();
  });

  // CHECK FOR TRUTHY & FALSY VALUES
  // toBeNull matches only null
  // toBeUndefined matches only undefined
  // toBeDefined is the opposite of toBeUndefined
  // toBeTruthy matches anything that an if statement treats as true
  // toBeFalsy matches anything that an if statement treats as false

  // // toBeFalsy
  it("Should be falsy", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
  });

  // Less than and greater than
  it("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
  });
});

// COMPLEX TYPES 
describe("complex types", () => {
  // reference type use toEqual
  it("User should be Brad Traversy object", () => {
    expect(functions.createUser()).toEqual({
      firstName: "Brad",
      lastName: "Traversy",
    });
  });
  // Regex
  it('There is no I in team', () => {
    expect('team').not.toMatch(/I/i); // case insensitive /i 
  });

  // Arrays
  it('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
  });

  // Working with async data

  //Promise
  it('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
      expect(data.name).toEqual('Leanne Graham');
    });
  }); 
});

// AXIOS
describe("using axios", () => {
  // beforeEach(() => initDatabase());
  // afterEach(() => closeDatabase());

  beforeAll(() => initDatabase());
  afterAll(() => closeDatabase());

  const initDatabase = () => console.log("Database Initialized...");
  const closeDatabase = () => console.log("Database Closed...");

  // Async Await
  it("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1); // verifies a certain number of assertions on async process 

    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
  });
});

const nameCheck = () => console.log('Checking Name ...');

describe('Checking Names',() => {
  beforeEach(() => nameCheck());

  fit('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });
});
  // // Applies to all tests in this file
  // beforeEach(() => {
  //   return initializeCityDatabase();
  // });

  // it('city database has Vienna', () => {
  //   expect(isCity('Vienna')).toBeTruthy();
  // });

