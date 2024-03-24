export default class WidgetCallaps {
  constructor(parent) {
    this.parent = parent;
  }

  init() {
    this.bindToDOM();
  }

  bindToDOM() {
    // Добавляем виджет в контейнер родителя
    const div = WidgetCallaps.addTagHTML(this.parent, 'collapse');
    div.textContent = 'Collapse';
    const insert = WidgetCallaps.addTagHTML(this.parent, 'collapse-insert');
    const body = WidgetCallaps.addTagHTML(insert, 'collapse-body');
    body.textContent = textForWidget;
    insert.style.height = '0px';

    div.addEventListener('click', () => {
      insert.style.transition = ''; // отменяю добавленную анимацию 
      insert.classList.toggle('active');
      if (insert.className.includes('active')) {
        insert.style.height = `${body.offsetHeight + 11}px`;
        div.style.boxShadow = 'rgba(38, 143, 255, 0.5) 0 0 0 0.2rem';
      } else {
        insert.style.height = '0px';
        div.style.boxShadow = '';
      }
    });

    insert.addEventListener('transitionend', () => { // событие - конец анимации
      // Если появилась полоса прокрутки страницы
      // Проверяем размер элемента
      const height = body.offsetHeight + 11;
      if (insert.className.includes('active')) {
        if (insert.style.height !== height) {
          insert.style.transition = 'none';
          insert.style.height = `${height}px`;
        }
      }
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

const textForWidget = `Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста.Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста.Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста.Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста.Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста. Много много текста. 
  Много много текста.`;
