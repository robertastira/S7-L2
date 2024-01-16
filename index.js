const userName = document.getElementById('userName')
const saveButton = document.getElementsByClassName('btn-secondary')[0]
const resetButton = document.getElementsByClassName('btn-danger')[0]


saveButton.addEventListener('click', function () {
    console.log('hai salvato il tuo username!')
    const content = userName.value
    console.log('userName:', content)
    localStorage.setItem('UserName', content)
    alert('Salvataggio effettuato')
})

resetButton.addEventListener('click', function () {
    console.log('hai eliminato il tuo username')
    userName.value = ''
    localStorage.removeItem('UserName')
    alert('Cancellazione memoria effettuata!')
    deletedCard = document.getElementsByClassName("card")[0]
    deletedCard.classList.add("card-none")
  })

  const userDate = [] 

class userForm {
  constructor(_userName) {
    this.userName = _userName
  }

}

const fillUserSchedule = function () {

    const row = document.getElementById('userCard')
    row.innerHTML = ''
    userDate.forEach((userForm) => {
      const newCol = document.createElement('div')
      newCol.classList.add('col') 
      newCol.innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">${userForm.userName}</h5>
              </div>
          </div>
          `
      row.appendChild(newCol)
    })
  
    userName.value = ''
    
  }

  const formReference = document.getElementsByTagName('form')[0]
  formReference.addEventListener('submit', function (e) {
    e.preventDefault() 
  
    const userLive = new userForm(
      userName.value,
      
    )
  
    console.log('Scheda Utente Creata', userLive)
    userDate.push(userLive)
    fillUserSchedule()
  })