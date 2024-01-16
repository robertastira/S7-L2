const startButton = document.getElementsByClassName('btn-success')[0]
const counterBlock = document.getElementById('counter')

startButton.addEventListener('click', function () {
    const content = counterBlock.value
    content.innerHTML = `
    ${userForm.userName}+1
          `
    localStorage.setItem('Contatore', content)
    alert('Stop')
})