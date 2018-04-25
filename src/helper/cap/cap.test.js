import cap from './cap';

describe('cap tests', () => {
  it('should be a function', () => {
    expect(cap).toBeAFunction;
  });

  it('should return a string with the first letter uppercase', () => {
    expect(cap('string')).toEqual('String');
  });
});