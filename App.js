import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    const activeTab = ref(-1);

    return {
      activeTab,
    }
  },
  template: `
    <div>
      <form action="#" @reset="activeTab = -1">
        <fieldset>
          <legend>Tabs</legend>
          <label for="activeTab_0">Tab 0</label>
          <input type="radio" name="tab" :value="0" v-model="activeTab" id="activeTab_0"/>
          <label for="activeTab_1">Tab 1</label>
          <input type="radio" name="tab" :value="1" v-model="activeTab" id="activeTab_1"/>
          <label for="activeTab_2">Tab 2</label>
          <input type="radio" name="tab" :value="2" v-model="activeTab" id="activeTab_2"/>
        </fieldset>
        <button type="reset">Reset</button>
      </form>
      <div v-if="activeTab === 0" style="background-color: red">
        Tab 0
      </div>
      <div v-else-if="activeTab === 1" style="background-color: green">
        Tab 1
      </div>
      <div v-else-if="activeTab === 2" style="background-color: blue">
        Tab 2
      </div>
      <div v-else>
        Not 0/1/2
      </div>
    </div>
  `
});
