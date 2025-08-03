import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const message = ref('Hello vue!');

    const reverseMessage = () => {
      message.value = message.value.split('').reverse().join('')
    };

    return {
      message,
      reverseMessage,
    }
  },
  template: `
    <div>
      <p>{{message}}</p>
      <button @click="reverseMessage">Reverse Message</button>
    </div>
  `
});
