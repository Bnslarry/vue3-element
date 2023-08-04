import { createApp } from 'vue';
//import Example from './example.vue';
//import Example from './examples/theme.vue';
// import Example from './examples/message.vue';
// import Example from './examples/dialog.vue';
// import Example from './examples/grid.vue';
// import Example from './examples/layout.vue';
import Example from './examples/form.vue';
import './src/index.less';

const app = createApp(Example);

app.mount(document.querySelector('#app') as HTMLDivElement)

