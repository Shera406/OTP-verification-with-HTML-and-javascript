function notifyMe () {
  const notification = new window.Notification('code for login page', {
    body: 'code is 6567'
  })

  notification.onclick = () => console.log('Clicked')
  notification.onclose = () => console.log('Closed')
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').onclick = notifyMe
})
