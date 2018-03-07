import { storiesOf } from '@storybook/vue'
import ButtonComponent from './'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'
import {
  withKnobs,
  color,
  text,
  boolean,
} from '@storybook/addon-knobs'

storiesOf('Buttons', module)
  .addDecorator(withKnobs)

  .add('with text', () => ({
      components: { ButtonComponent },
      template: `
        <button-component
          :handleClick="log"
        >
          Button Text...
        </button-component>
      `,
      methods: { log: action('Click button with text') }
    }))

  .add('with emoji', () => ({
    components: { ButtonComponent },
    template: `
      <button-component
        :handleClick="log"
      >
        😀 😎 👍 💯
      </button-component>
    `,
    methods: { log: action('Click button with emoji') }
  }))

  .add('with Note', withNotes({
    notes: `
      把一些紀錄用的筆記寫在這裡。
    `
  })(() => ({
    components: { ButtonComponent },
    template: `
      <button-component
        :handleClick="log"
      >
        With Note
      </button-component>
    `,
    methods: { log: action('Click button with Note') }
  })))

  .add('with Addon Knobs', withNotes({
    notes: `
      Addon Knobs 可以設定一些參數的調整介面，
      讓 UI 開發環境可以立即調整參數數值。
    `
  })(() => {
    const context = text('Context', 'with addon knobs!')
    const hasRounded = boolean('has Rounded', false)

    return {
      components: { ButtonComponent },
      template: `
        <button-component
          :rounded="${hasRounded}"
          :handleClick="log"
        >
          ${context}
        </button-component>
      `,
      methods: { log: action('Click button with addon knobs') }
    }
  }))