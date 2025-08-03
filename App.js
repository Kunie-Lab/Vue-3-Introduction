import {defineComponent, ref} from "vue";
import GroceryListItem from './GroceryListItem.js';

export default defineComponent({
  components: { GroceryListItem },
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
      <GroceryListItem v-for="item in groceryList" :key="item.id" :text="item.text"/>
    </ol>
  `
});
