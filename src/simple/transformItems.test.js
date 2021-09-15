const transformItems = require('./transformItems');

it('transformItems function exists', () => {
    expect(transformItems).toBeDefined();
});

it('transformItems performs using mockCallback', () => {
    const mockCallback = jest.fn(x => 42 + x);
    transformItems([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(43);
});

test.only('verify injected tet value', () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
});