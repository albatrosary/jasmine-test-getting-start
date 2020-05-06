import { Bar } from './bar';

export class Foo {
  private bar: Bar;
  // constructor(private bar: Bar) {
  constructor() {
    this.bar = new Bar();
  }

  getUserName(): string {
    console.log('Foo.getUserName()');
    return this.bar.getUser();
  }
}