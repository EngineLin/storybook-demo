import { storiesOf } from '@storybook/vue'

import Homepage from './'
import { linkTo } from '@storybook/addon-links'

storiesOf('Homepage', module)
  .add('welcome to Storybook', () => ({
    components: { Homepage },
    template: '<homepage :showApp="action" />',
    methods: { action: linkTo('Button') }
  }))