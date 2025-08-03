import {defineComponent} from "vue";

export default defineComponent({
  props: ['text'],
  template: `<li>{{ text }}</li>`
});
