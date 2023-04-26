const dataButtonsEn = [
  { id: 'Backquote', value: '`' },
  { id: 'Digit1', value: '1' },
  { id: 'Digit2', value: '2' },
  { id: 'Digit3', value: '3' },
  { id: 'Digit4', value: '4' },
  { id: 'Digit5', value: '5' },
  { id: 'Digit6', value: '6' },
  { id: 'Digit7', value: '7' },
  { id: 'Digit8', value: '8' },
  { id: 'Digit9', value: '9' },
  { id: 'Digit0', value: '0' },
  { id: 'Minus', value: '-' },
  { id: 'Equal', value: '=' },
  { id: 'Backspace', value: 'Backspace' },
  { id: 'Tab', value: 'Tab' },
  { id: 'KeyQ', value: 'q' },
  { id: 'KeyW', value: 'w' },
  { id: 'KeyE', value: 'e' },
  { id: 'KeyR', value: 'r' },
  { id: 'KeyT', value: 't' },
  { id: 'KeyY', value: 'y' },
  { id: 'KeyU', value: 'u' },
  { id: 'KeyI', value: 'i' },
  { id: 'KeyO', value: 'o' },
  { id: 'KeyP', value: 'p' },
  { id: 'BracketLeft', value: '[' },
  { id: 'BracketRight', value: ']' },
  { id: 'Backslash', value: '\\' },
  { id: 'CapsLock', value: 'CapsLock' },
  { id: 'KeyA', value: 'a' },
  { id: 'KeyS', value: 's' },
  { id: 'KeyD', value: 'd' },
  { id: 'KeyF', value: 'f' },
  { id: 'KeyG', value: 'g' },
  { id: 'KeyH', value: 'h' },
  { id: 'KeyJ', value: 'j' },
  { id: 'KeyK', value: 'k' },
  { id: 'KeyL', value: 'l' },
  { id: 'Semicolon', value: ';' },
  { id: 'Quote', value: "'" },
  { id: 'Enter', value: 'Enter' },
  { id: 'ShiftLeft', value: 'Shift' },
  { id: 'KeyZ', value: 'z' },
  { id: 'KeyX', value: 'x' },
  { id: 'KeyC', value: 'c' },
  { id: 'KeyV', value: 'v' },
  { id: 'KeyB', value: 'b' },
  { id: 'KeyN', value: 'n' },
  { id: 'KeyM', value: 'm' },
  { id: 'Comma', value: ',' },
  { id: 'Period', value: '.' },
  { id: 'Slash', value: '/' },
  { id: 'ArrowUp', value: '▲' },
  { id: 'ShiftRight', value: 'Shift' },
  { id: 'ControlLeft', value: 'Ctrl' },
  { id: 'MetaLeft', value: 'Win' },
  { id: 'AltLeft', value: 'Alt' },
  { id: 'Space', value: ' ' },
  { id: 'AltRight', value: 'Alt' },
  // { id: 'ContextMenu', value: 'ContextMenu' },
  { id: 'ControlRight', value: 'Ctrl' },
  { id: 'ArrowLeft', value: '◄' },

  { id: 'ArrowDown', value: '▼' },
  { id: 'ArrowRight', value: '►' },
  { id: 'Delete', value: 'Del' },
];

function renderKeyboard(data) {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  const container = document.createElement('div');
  container.className = 'container';
  document.body.append(container);
  container.append(keyboard);
  data.forEach((el) => {
    const keyButton = document.createElement('div');

    if (
      el.id === 'Backspace' ||
      el.id === 'Tab' ||
      el.id === 'ShiftRight' ||
      el.id === 'ShiftLeft' ||
      el.id === 'CapsLock' ||
      el.id === 'Enter'
    ) {
      keyButton.className = `key key-large ${el.id}`;
    } else if (el.id === 'Space') {
      keyButton.className = `key key-space ${el.id}`;
    } else {
      keyButton.className = `key ${el.id}`;
    }
    keyButton.textContent = el.value;
    keyboard.append(keyButton);
  });
}

renderKeyboard(dataButtonsEn);

function renderTextArea() {
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  document.querySelector('.container').append(textArea);
}

renderTextArea();

function textAreaHandler(symbol) {
  const textArea = document.querySelector('.textarea');
  textArea.value += symbol.textContent;
}

function keyClickHandler() {
  const key = document.querySelectorAll('.key');
  window.addEventListener('keydown', (e) => {
    key.forEach((el) => {
      if (el.classList.contains(e.code)) {
        el.classList.add('key-active');
        document.querySelector('.textarea').focus();
      }
    });
  });

  window.addEventListener('keyup', (e) => {
    key.forEach((el) => {
      if (el.classList.contains(e.code)) {
        el.classList.remove('key-active');
      }
    });
  });

  key.forEach((el) => {
    el.addEventListener('mousedown', () => {
      document.querySelector('.textarea').focus();
      textAreaHandler(el);
      el.classList.add('key-active');
    });
  });

  key.forEach((el) => {
    el.addEventListener('mouseup', () => {
      el.classList.remove('key-active');
    });
  });
}

keyClickHandler();
