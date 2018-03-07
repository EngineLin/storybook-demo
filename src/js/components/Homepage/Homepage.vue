<script>
export default {
  name: 'homepage',

  props: {
    showApp: {
      type: Function,
      defaul: () => console.log('Welcome to storybook!'),
    }
  },

  methods: {
    onClick (event) {
      event.preventDefault()
      this.showApp()
    }
  }
}
</script>

<template>
<div class="main">
  <h1>我的 storybook !</h1>
  <p>
    This is a UI component dev environment for your app.
  </p>
  <img
    class="logo"
    src="../../../asset/images/storybookforvue.png"
  />
  <div class="help">
    <p>
      這是連結其他 Stories 的範例：
      <a
        class="link"
        @click="onClick"
        role="button"
        tabIndex="0"
      >
        stories
      </a>
      <code class="code">Button</code>
      .
    </p>
    <p class="note">
      <b>NOTE:</b>
      <br />
      Have a look at the
      <code class="code">.storybook/webpack.config.js</code>
      to add webpack
      loaders and plugins you are using in this project.
    </p>
  </div>
</div>
</template>

<style lang="sass" scoped>
.main
  margin: 15px
  max-width: 600px
  margin: auto
  line-height: 1.4
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif
  text-align: center

.logo
  width: 400px

.help
  border: 1px solid silver
  padding: 10px 20px
  text-align: left
  font-size: 14px
  border-radius: 10px

.link
  color: #1474f3
  text-decoration: none
  border-bottom: 1px solid #1474f3
  padding-bottom: 2px

.code
  font-size: 15px
  font-weight: 600
  padding: 2px 5px
  border: 1px solid #eae9e9
  border-radius: 4px
  background-color: #f3f2f2
  color: #3a3a3a
  display: inline-block

.note
  opacity: 0.5
</style>
