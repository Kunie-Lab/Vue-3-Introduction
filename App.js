import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const groceryList = ref([
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]);

    return {
      groceryList,
    }
  },
  template: `
    <ol>
      <li v-for="item in groceryList" :key="item.id">{{ item.text }}</li>
    </ol>
  `
});
