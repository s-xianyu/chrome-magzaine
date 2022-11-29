console.log('background.js')
const a = [1,2,3]
a.map(async item => {
  await console.log(item)
})
export default {}

