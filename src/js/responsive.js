export default function checkMobile(cb) {
  if (!cb) {
    console.error('Expected callback function')
  }
  if (window.innerWidth <= 700) {
    cb()
  }
}
