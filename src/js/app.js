import WidgetCallaps from './WidgetCallapse';
import WidgetChat from './WidgetChat';
import WidgetLike from './WidgetLike';

const textForWidget = [
  `Много много текста. 
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
  Много много текста.`,
  `Anim pariatur cliche reprehenderit, 
  enim eiusmod high life accusamus terry 
  richardson ad squid. Nihil anim keffiyeh 
  helvetica, craft beer labore wes anderson 
  cred nesciunt sapiente ea proident.`,
];

let index = 0;
const conteinersTask1 = document.querySelectorAll('.conteiner-task-1');
conteinersTask1.forEach((item) => {
  const callaps = new WidgetCallaps(item, textForWidget[index]);
  callaps.init();
  index += 1;
});

const conteinerTask2 = document.querySelector('.conteiner-task-2');
const chat = new WidgetChat(conteinerTask2);
chat.init();

const conteinerTask3 = document.querySelector('.conteiner-task-3');
const like = new WidgetLike(conteinerTask3);
like.init();
