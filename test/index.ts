class Box {
  width: number;
  height: number = 500;
  volume: number | undefined;
  _content: string | undefined;

  constructor(width: number, volume?: number, content?: string) {
    this.width = width;
    this.volume = volume;
    this._content = content;
  }

  calcVolume(): void {
    if (!this.volume) {
      this.volume = this.width * this.height;
      console.log(`Volume is ${this.volume}`);
    } else {
      console.log(`Volume is ${this.volume}`);
    }
  }

  // Overloading
  checkBoxSize(transport: number): string;
  checkBoxSize(transport: number[]): string;
  checkBoxSize(transport: number | number[]): string {
    if (typeof transport === 'number') {
      return transport >= this.width ? 'Ok' : 'Not Ok';
    } else {
      return transport.some((item) => item >= this.width) ? 'Ok' : 'Not Ok';
    }
  }

  // get content() {
  //   return this._content;
  // }

  // set content(value) {
  //   this._content = `Data: ${new Date().toLocaleDateString()} - ${value}`;
  // }

  async getContent(value: string) {
    const data = await new Date().toLocaleDateString();
    this._content = `Data: ${data} - ${value}`;
    console.log(this._content);
    // return this._content;
  }
}

const firstBox = new Box(100);
firstBox.volume = 1000;
// console.log((firstBox.content = 'Books'));
// console.log(firstBox.content);

class PresentBox extends Box {
  wrap: string;
  height: number = 300;

  constructor(wrap: string, width: number) {
    super(width);
    this.wrap = wrap;
  }

  override async getContent(value: string, text?: string) {
    const data = await new Date().toLocaleDateString();

    if (!text) {
      super.getContent(value);
    } else {
      text ? text : 'No text';
    }

    this._content = `Data: ${data} - ${value}, Text: ${text ? text : 'No text'}`;
    console.log(this._content);
    // return this._content;
  }
}

new PresentBox('Red', 200).getContent('Books', 'Hello');

// class User {
//   name: string;
//   age: number;
// }

// const ivan = new User();
// ivan.name = 'Ivan';
// ivan.age = 25;
// console.log(ivan);

class Styles {
  [s: string]: string | ((s: string) => boolean);

  // method() {
  //   console.log('Method');
  // }
}

const style = new Styles();
style.color = 'red';
style.fontSize = '16px';
