const log = (text) => {
    const parent = document.querySelector('#events');
    const el = document.createElement('li');
    el.innerHTML = text;
  
    parent.appendChild(el);
    parent.scrollTop = parent.scrollHeight;
  };
  
  const onChatSubmitted = (e) => {
    e.preventDefault();
  
    const input = document.querySelector('#chat');
    const text = input.value;
    input.value = '';
  
    log(text);
  };
  
  (() => {
    log('welcome');
  
    document
      .querySelector('#chat-form')
      .addEventListener('submit', onChatSubmitted);
  })();