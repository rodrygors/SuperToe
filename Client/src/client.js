// const log = (text) => {
//   const parent = document.querySelector('#events');
//   const el = document.createElement('li');
//   el.innerHTML = text;

//   parent.appendChild(el);
//   parent.scrollTop = parent.scrollHeight;
// };

// const onChatSubmitted = (e) => {
//   e.preventDefault();

//   const input = document.querySelector('#chat');
//   const text = input.value;
//   input.value = '';

//  log(text);
// };

//Função com lógica para submeter a alteração de nickname
const onUsernameSubmited = (sock) => (e) => {
  e.preventDefault();

  const input = document.querySelector('#chose-username');
  const username = input.value;
  input.value = '';

  sock.emit('change-username', username);
};

(() => {
  //Abrir ligação com o servidor
  const sock = io();

  //Mostrar mensagens do servidor na consola
  sock.on('console-log', message => {
    console.log(message);
  })

  //document.querySelector('#chat-form').addEventListener('submit', onChatSubmitted);
  document.querySelector('#chose-username-form').addEventListener('submit', onUsernameSubmited(sock));
})();