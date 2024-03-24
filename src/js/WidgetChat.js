export default class WidgetChat {
  constructor(parent) {
    this.parent = parent;
    this.circle = null;
    this.form = null;
  }

  init() {
    this.bindToDOM();
  }

  bindToDOM() {
    // Добавляем виджет в контейнер родителя
    this.drawCircle(this.parent);
    this.drawChat(this.parent);
  }

  drawCircle(div) {
    // Отрисовывает кружок - кнопку
    this.circle = WidgetChat.addTagHTML(div, 'widget-circle');
    this.circle.addEventListener('click', () => {
      this.circle.style.width = '0px';
      this.circle.style.height = '0px';
      this.circle.style.right = '42px';
      this.circle.style.bottom = '42px';
      
      this.form.style.width = '200px';
      this.form.style.height = '200px';
      this.form.style.padding = '10px';
      this.form.style.right = '35px';
      this.form.style.bottom = '35px';
    });
  }

  drawChat(parent) {
    // Отрисовывает форму чата
    this.form = WidgetChat.addTagHTML(parent, 'chat-content');
    const title = WidgetChat.addTagHTML(this.form, 'chat-title');
    title.textContent = 'Напишите нам';
    const cross = WidgetChat.addTagHTML(title, 'chat-cross');
    cross.textContent = 'x';
    const divText = WidgetChat.addTagHTML(this.form, 'chat-text');
    const text = WidgetChat.addTagHTML(divText, 'field-text', 'textarea');
    const btn = WidgetChat.addTagHTML(this.form, 'chat-button', 'button');
    btn.textContent = 'Отправить';
    btn.setAttribute('type', 'button');

    cross.addEventListener('click', () => {
      text.value = '';
      this.form.style.width = '0px';
      this.form.style.height = '0px';
      this.form.style.padding = '0px';
      this.form.style.right = '110px';
      this.form.style.bottom = '110px';

      this.circle.style.width = '';
      this.circle.style.height = '';
      this.circle.style.right = '';
      this.circle.style.bottom = '';
    });
  }

  static addTagHTML(parent, className = null, type = 'div') {
    // Создает заданный тег и добавляет его в parent
    const div = document.createElement(type);
    div.classList.add(className);
    parent.append(div);
    return div;
  }
}
