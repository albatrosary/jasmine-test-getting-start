import 'jasmine';
import { Foo } from '../src/foo';
import { Bar } from '../src/bar';

describe('something', () => {

  const foo = new Foo();

  it('should work', () => {
    // prototype を使ってメソッドを上書き
    Bar.prototype.getUser = (): string => {
      return 'fake';
    };
    expect(foo.getUserName()).toBe('fake');
  });
});
