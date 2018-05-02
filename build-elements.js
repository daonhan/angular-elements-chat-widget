const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/element-build/polyfills.js',
    './dist/element-build/runtime.js',
    './dist/element-build/main.js'
  ]

  await fs.ensureDir('./dist/elements')

  await concat(files, './dist/elements/chat-widget.js')

  await fs.copy('./demo.html', './dist/elements/index.html')
  await fs.copy('./angular-elements-logo.png', './dist/elements/angular-elements-logo.png')

  console.info('Elements created successfully!')

})()
