import WidgetCallaps from './WidgetCallapse';
import WidgetChat from './WidgetChat';
import WidgetLike from './WidgetLike';

const conteinersTask1 = document.querySelectorAll('.conteiner-task-1');
conteinersTask1.forEach((item) => {
  const callaps = new WidgetCallaps(item);
  callaps.init();
});

const conteinerTask2 = document.querySelector('.conteiner-task-2');
const chat = new WidgetChat(conteinerTask2);
chat.init();

const conteinerTask3 = document.querySelector('.conteiner-task-3');
const like = new WidgetLike(conteinerTask3);
like.init();
