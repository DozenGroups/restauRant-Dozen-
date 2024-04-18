'use strict';

export  {
    
}





// При клике на картинку - открывает баннер "информация о товаре". При клике на пустое место на экране закрывает баннер. Для всех карточек на странице.Также запрещает скролл body, когда открыто окно.



const body = document.body;
const toggleLinks = document.querySelectorAll('.card__image');
const productBlocks = document.querySelectorAll('.product');
const toggleButtons = document.querySelectorAll('.popup__close');

toggleLinks.forEach((toggleLink, index) => {
  toggleLink.addEventListener('click', function(event) {
    event.preventDefault();
    productBlocks[index].style.display = productBlocks[index].style.display === 'none' ? 'block' : 'none';
    body.classList.add("lock");
  });
});

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', function() {
    productBlocks[index].style.display = 'none';
    body.classList.remove("lock");
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.product') && !event.target.closest('.card__image') && !event.target.closest('.popup__close')) {
    productBlocks.forEach((productBlock) => {
      productBlock.style.display = 'none';
    });
    body.classList.remove("lock");
  }
});






function validation(form) {
  
  function removeError(input) {
      const parent = input.parentNode;

      if (parent.classList.contains('error')) {
          parent.querySelector('.error-label').remove()
          parent.classList.remove('error')
      }
  }

  function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement('label')

      errorLabel.classList.add('error-label')
      errorLabel.textContent = text

      parent.classList.add('error')

      parent.append(errorLabel)
  }


  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

      removeError(input)

      if (input.dataset.minLength) {
          if (input.value.length < input.dataset.minLength) {
              removeError(input)
              createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
              result = false
          }
      }

      if (input.dataset.maxLength) {
          if (input.value.length > input.dataset.maxLength) {
              removeError(input)
              createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
              result = false
          }
      }

      if (input.dataset.required == "true") {
          if (input.value == "") {
              removeError(input)
              createError(input, 'Поле не заполнено!')
              result = false
          }
      }

  }

  return result
}


document.getElementById('add-form').addEventListener('submit', function(event) {
  event.preventDefault()

  if (validation(this) == true) {
      alert('Форма проверена успешно!')
  }

})

const deliveryOption = document.getElementById("delivery_option");
const pickupInfo = document.getElementById("pickup-info");

deliveryOption.addEventListener("change", function() {
  if (this.value === "pickup") {
      pickupInfo.classList.add("visible");
  } else {
      pickupInfo.classList.remove("visible");
  }
});

























