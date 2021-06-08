test('mock implementation of a basic function', () => {
    const mock = jest.fn(() => 'I am a mock function');
    expect(mock('Calling my mock function')).toBe('I am a mock function');
    expect(mock).toHaveBeenCalledWith('Calling my mock function');
});

test('mock return value one time', () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!');

    mock();
    mock();

    expect(mock).toHaveBeenCalledTimes(2);

    mock('Hello', 'there', 'Gary');
    expect(mock).toHaveBeenCalledWith('Hello', 'there', 'Gary');
});

test('mock implementation of a function', () => {
    //const mock = jest.fn(() => 'Ireland'); // Same
    const mock = jest.fn().mockImplementation(() => 'Ireland');
    
    expect(mock('Location')).toBe('Ireland');
    expect(mock).toHaveBeenCalledWith('Location');
});

test('spying using original implementation', () => {
    const pizza = {
        name: n => `Pizza name: ${n}`
    }
    const spy = jest.spyOn(pizza, 'name');
    
    expect(pizza.name('Florentine')).toBe('Pizza name: Florentine');
    expect(spy).toHaveBeenCalledWith('Florentine');
});
// npm test zeroToHero.test

