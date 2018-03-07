import { storiesOf } from '@storybook/vue'

import { 自訂組件名稱 } from './'

/* 預先將能用的功能都引入，在製作元件的最後刪掉沒用到的部分就好 */
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import { linkTo } from '@storybook/addon-links'
import {
  withKnobs,
  color,
  text,
  boolean,
} from '@storybook/addon-knobs'
/* ------------------------------------------------------- */

// 開頭用 storiesOf，所有可以改動的部分都會用中文當作參數。
// 第一個參數是故事系列的標題
storiesOf('故事系列標題', module)
  .addDecorator(withKnobs)

  // 第一個參數是故事系列中的子故事
  .add('子故事名稱', withNote({
    note: `
      將想要說明的文字寫在這裡，不需要說明也可以將這邊的文字清空。
    `
  })(() => {
    // 設定想要控制的變數，第一個是欄位顯示名稱，第二個是數值
    // 不需要的可以移除，這只是範例
    const color = color('Background Color', '#fefefe')
    const context = text('內文內容', '這部分是內文內容')
    const isShow = boolean('要不要顯示', false)

    return {
      // 自訂組件名稱 要與上方引入的組件名稱相同
      components: { 自訂組件名稱 },

      // 可以對組件進行 v-on、v-bind ... 等等加工
      // 重點: 寫在 template 內的組件名稱需要是全小寫，且組件名稱如果使用駝峰式寫法要在中間加 "-"，
      // 例如，組件名稱: myComponent 在 template 中要寫 <my-component></my-comonent>

      // 在這個 template 中，isShow 被丟到組件中使用，
      // @click 則是綁定的事件，所以要在後面加上 methods
      template: `
        <自訂組件名稱 :isShow="${isShow}" @click="action" @dbclick="log">
          ${context}
        </自訂組件名稱>
      `,

      // action 方法會因為上方設定的 @click 觸發， linkTo('子故事名稱')，效果是會跳到指定的子故事
      // log 方法會因為上方設定的 @dbclick 觸發， action('顯示內容')，效果會 console.log 出 '顯示內容'，
      // 並且是顯示在 storybook 下方的顯示欄位內。
      methods: {
        action: linkTo('子故事名稱'),
        log: action('顯示內容')
      }
    }
  }))