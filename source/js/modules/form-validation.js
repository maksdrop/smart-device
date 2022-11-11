function initValidation(formSelector, parentNameSelector, parentPhoneSelector, nameSelector, phoneSelector, attributed) {
  const form = document.querySelector(formSelector);
  const parentName = form.querySelector(parentNameSelector);
  const parentPhone = form.querySelector(parentPhoneSelector);
  const name = form.querySelector(nameSelector);
  const phone = form.querySelector(phoneSelector);

  document.querySelectorAll(attributed).forEach((attribute) => {
    attribute.removeAttribute('required');
  });

  const createMessage = (parentElement, message) => {
    let messageElement = document.createElement('div');
    messageElement.style.cssText = `
      position: absolute;
      bottom: -19px;
      font-size: 12px;
      color: red;
    `;
    messageElement.textContent = message;
    parentElement.append(messageElement);
  };

  const createCondition = (selector) => {
    if (selector.childNodes.length >= 3) {
      selector.childNodes[2].remove();
    }
  };

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let isvalid = 0;

    if (name.value.length <= 1) {
      createCondition(parentName);
      createMessage(parentName, 'Напишите свое имя');
    } else {
      localStorage.setItem('name', name.value);
      createCondition(parentName);
      isvalid++;
    }

    if (phone.value.length !== 18) {
      createCondition(parentPhone);
      createMessage(parentPhone, 'Некорректно введена форма');
    } else {
      localStorage.setItem('phone', phone.value);
      createCondition(parentPhone);
      isvalid++;
    }

    if (isvalid === 2) {
      if (document.querySelector('.modal').classList.contains('is-active')) {
        document.querySelector('.modal').classList.remove('is-active');
      }
      form.reset();
      isvalid = 0;

    }
  });

}

export default initValidation;
