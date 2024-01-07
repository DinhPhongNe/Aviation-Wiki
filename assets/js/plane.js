class Button {
  constructor(title, onClick) {
    this.title = title;
    this.onClick = onClick;
  }

  render() {
    const buttonElement = document.createElement('button');
    buttonElement.className = 'button';
    buttonElement.textContent = this.title;
    buttonElement.addEventListener('click', this.onClick);
    return buttonElement;
  }
}

class MultipleButton {
  constructor(options) {
    this.options = options;
  }

  render() {
    const containerElement = document.createElement('div');
    containerElement.className = 'muiltiple-button';

    for (let option of this.options) {
      const button = new Button(option.title, option.onClick).render();
      containerElement.appendChild(button);
    }

    return containerElement;
  }
}

class App {
  constructor() {
    this.title = 'Which way do you want to choose?';
    this.options = [
      { title: '︎Buy ticket︎︎', onClick: () => window.location.href = 'ticket-book.html' },
      { title: '︎ ︎Avia Wiki︎ ︎ ︎', onClick: () => window.location.href = 'homepage.html' }
    ];
  }

  render() {
    const appElement = document.createElement('div');
    const titleElement = document.createElement('h1');
    titleElement.className = 'title';
    titleElement.textContent = this.title;
    appElement.appendChild(titleElement);

    const multipleButton = new MultipleButton(this.options).render();
    appElement.appendChild(multipleButton);

    return appElement;
  }
}

const app = new App();
document.body.appendChild(app.render());