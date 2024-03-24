import WidgetCallaps from './WidgetCallapse';
import WidgetChat from './WidgetChat';

const conteinersTask1 = document.querySelectorAll('.conteiner-task-1');
conteinersTask1.forEach((item) => {
  const callaps = new WidgetCallaps(item);
  callaps.init();
});

const conteinerTask2 = document.querySelector('.conteiner-task-2');
const chat = new WidgetChat(conteinerTask2);
chat.init();
