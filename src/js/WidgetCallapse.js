export default class WidgetCallaps {
  constructor(parent) {
    this.parent = parent;
  }

  init() {
    this.bindToDOM();
  }

  bindToDOM() {
    const div = WidgetCallaps.addTagHTML(this.parent, 'collapse');
    div.textContent = 'Collapse';
    const elem = WidgetCallaps.addTagHTML(this.parent, 'collapse-insert');
    elem.textContent = 'Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста.Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста.Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста.Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста.Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста. Много много текста.';
    elem.style.minHeight = '0px';
    // elem.style.color = 'none';
    // elem.style.borderWidth = '0px';

    div.addEventListener('click', () => {
      elem.style.height = 'none';
      elem.style.borderWidth = '1px';
      elem.classList.toggle('active');
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
