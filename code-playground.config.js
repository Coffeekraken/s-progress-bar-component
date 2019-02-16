module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-{component-name}-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {
    // compile server port
    port: 4000
  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <div class="progress-bar progress-bar--stripped m-b" value="50"></div>
        <div class="progress-bar progress-bar--primary m-b" value="75"></div>
        <div class="progress-bar progress-bar--secondary m-b" value="33"></div>
        <div class="progress-bar progress-bar--success m-b" value="50"></div>
        <div class="progress-bar progress-bar--error progress-bar--stripped m-b" value="75"></div>
        <div class="progress-bar progress-bar--warning m-b" value="33"></div>
        <div class="progress-bar progress-bar--info progress-bar--stripped m-b" value="65"></div>
      `
    },
    css: {
      language: 'scss',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';
        @import 'index';
        @include s-init();
        @include s-classes();
        @include s-typography-classes();
        body {
          padding: s-space(bigger);
        }
        @include s-progress-bar-classes(
          $colors: default primary secondary success error warning info
        );
      `
    },
    js: {
      language: 'js',
      data: `
        const $progress1 = document.querySelector('.progress-bar:first-child')
        const $progress2 = document.querySelector('.progress-bar--primary')
        setInterval(() => {
          $progress1.setAttribute('value', Math.round(Math.random() * 100))
        }, 2000)
        setInterval(() => {
          let value = parseInt($progress2.getAttribute('value'))
          if (value >= 100) value = 0
          value += 1
          $progress2.setAttribute('value', value)
        }, 200)
      `
    }
  }
}
