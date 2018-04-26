import checkNormal from './checkNormal';

describe('checkNormal tests', () => {

  it('should be a function', () => {
    expect(checkNormal).toBeAFunction;
  });

  it('should return a string of "font-bold" if val matches bold array', () => {
    expect(checkNormal('thin')).toEqual('font-bold');
    expect(checkNormal('extra')).toEqual('font-bold');
  });

  it('should return undefined if val does not match bold array', () => {
    expect(checkNormal('CharlesBarkley')).toEqual(undefined);
  });
  
});