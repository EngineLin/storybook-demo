import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** 
 * 讓 storybook 自動去抓 src 資料夾內所有 .stories.js 的檔案，
 * 並 load 進 Storybook 中。
 */
const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(story => req(story))
}
/* ----------------------------------------------------- */

configure(loadStories, module)
