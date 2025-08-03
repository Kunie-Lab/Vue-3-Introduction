import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const message = ref('Hello vue!')
    return {
      message
    }
  },
  template: `<div>{{ message }}</div>`
});
