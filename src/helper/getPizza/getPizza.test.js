import getPizza from './getPizza';

describe('getPizza tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(status: 'success')
    })
  );

  it('should be a function', () => {
    expect(getPizza).toBeAFunction;
  });

  it('getPizza should be called with the correct params', async () => {
    const expected = [
      'https://59b6v76zci.execute-api.us-west-2.amazonaws.com/nr/example'
    ];

    await getPizza();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});