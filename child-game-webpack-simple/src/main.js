import Vue from 'vue'
import App from './App.vue'
import GameApp from './GameApp.vue'
import _ from 'lodash'

new Vue({
  el: '#app',
  render: h => h(GameApp)
})
