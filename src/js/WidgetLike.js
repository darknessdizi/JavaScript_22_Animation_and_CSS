export default class WidgetLike {
  constructor(parent) {
    this.parent = parent;
    this.heartsList = [];
  }

  init() {
    this.bindToDOM();
  }

  bindToDOM() {
    // Добавляем виджет в контейнер родителя
    const like = WidgetLike.addTagHTML(this.parent, 'like-content');
    like.textContent = 'Like';

    like.addEventListener('click', () => {
      const heart = WidgetLike.addTagHTML(like, 'heart');
      this.heartsList.push(heart);
    });

    like.addEventListener('animationend', () => {
      this.heartsList[0].remove();
      this.heartsList.splice(0, 1);
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
