
/*Select elemets*/
const inputs       = document.querySelectorAll('input');
const button       = document.querySelector('button');
const contactList  = document.querySelector('.contactList');
const ListContacts = [];
let id = 0;

function cleanInputs(){
  let inputN = inputs[0];
  let inputE = inputs[1];
  let inputT = inputs[2];

  inputN.value = '';
  inputE.value = '';
  inputT.value = '';
}

function insertContacts(){
  let inputName  = inputs[0].value;
  let inputEmail = inputs[1].value;
  let inputTel   = inputs[2].value;

  if(inputName === '' || inputEmail === '' || inputTel === ''){
    alert('Preencha o campo vazio!')
  }else{
    const contacts = {
      id: id,
      name: inputName,
      email: inputEmail,
      tel: inputTel
    }
  
    id++;
    ListContacts.push(contacts);
    RenderLayout()
    cleanInputs()
  }
}

button.addEventListener('click', insertContacts);


function removeContact(evento){
  const buttonClicked    = evento.target;
  const contactCliked    = buttonClicked.parentElement;
  const idContactClicked = contactCliked.dataset.id;

  const contactRemoved = ListContacts.find((contact)=>{
      contact.id === idContactClicked;
  })

  const positionContactLocal = ListContacts.indexOf(contactRemoved);
  ListContacts.splice(positionContactLocal, 1);

  RenderLayout()
}

function RenderLayout(){
  contactList.innerHTML = '';

  if(ListContacts.length !== 0){
    for(let i = 0; i < ListContacts.length; i++){
      newContact(ListContacts[i])
    }
  }else{
    const listContactEmpty = `
    <li>
      <p>Não há contatos na sua lista</p>
    </li>   
    `;

    contactList.innerHTML = listContactEmpty;
  }

}

RenderLayout();

function newContact(contato){
  const li     = document.createElement('li');
  const button = document.createElement('button');
  const h2     = document.createElement('h2');
  const p      = document.createElement('p');
  const span   = document.createElement('span');

  button.id = 'removeContact';
  button.addEventListener("click", removeContact);

  li.dataset.id  = contato.id;
  h2.innerText   = 'Nome: '   + contato.name;
  p.innerText    = 'Email: '  + contato.email;
  span.innerText = 'Tel: '    +  contato.tel;

  li.appendChild(button);
  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(span);

  contactList.appendChild(li);

}




