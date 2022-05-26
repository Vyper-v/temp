const pug = require('pug')
const pugString = `.rounded-lg.shadow-md.bg-white.max-w-sm.overflow-hidden
img.block.object-cover.object-center(src=product.thumbnail alt=product.title)
.flex.justify-between.items-baseline.p-6
  h5.text-gray-900.text-xl.font-medium.mb-2 #{product.title}
  p.text-blue-700.text-base.mb-4 $#{product.price}`

pug.render(pugString,undefined,console.log)
