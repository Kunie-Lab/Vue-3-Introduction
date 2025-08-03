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
      <input v-model="message"/>
      <button @click="reverseMessage">Reverse Message</button>
      <p>Result: {{message}}</p>
    </div>
  `
});
