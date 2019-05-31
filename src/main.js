import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ding from './lib/ding'
import 'element-ui/lib/theme-chalk/index.css';
import { Input, RadioGroup, RadioButton, Dialog, Table, TableColumn, Select, Collapse, CollapseItem, DatePicker, TimePicker, Tabs, TabPane, Upload, MessageBox, Card, Row, Col, Button, Form, FormItem, Option, Message } from 'element-ui';
Vue.component(Input.name, Input);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioButton.name, RadioButton);
Vue.component(Dialog.name, Dialog);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(DatePicker.name, DatePicker);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Card.name, Card);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Upload.name, Upload);
Vue.component(Collapse.name, Collapse);
Vue.component(CollapseItem.name, CollapseItem);
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false
Vue.prototype.$message = Message;
initVue();
function initVue() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
