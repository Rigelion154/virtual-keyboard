const dataButtonsEn = [
  { id: 'Backquote', value: '`', alt: '~' },
  { id: 'Digit1', value: '1', alt: '!' },
  { id: 'Digit2', value: '2', alt: '@' },
  { id: 'Digit3', value: '3', alt: '#' },
  { id: 'Digit4', value: '4', alt: '$' },
  { id: 'Digit5', value: '5', alt: '%' },
  { id: 'Digit6', value: '6', alt: '^' },
  { id: 'Digit7', value: '7', alt: '&' },
  { id: 'Digit8', value: '8', alt: '*' },
  { id: 'Digit9', value: '9', alt: '(' },
  { id: 'Digit0', value: '0', alt: ')' },
  { id: 'Minus', value: '-', alt: '_' },
  { id: 'Equal', value: '=', alt: '+' },
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
  { id: 'BracketLeft', value: '[', alt: '{' },
  { id: 'BracketRight', value: ']', alt: '}' },
  { id: 'Backslash', value: '\\', alt: '|' },
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
  { id: 'Semicolon', value: ';', alt: ':' },
  { id: 'Quote', value: "'", alt: '"' },
  { id: 'Enter', value: 'Enter' },
  { id: 'ShiftLeft', value: 'Shift' },
  { id: 'KeyZ', value: 'z', ru: 'я' },
  { id: 'KeyX', value: 'x' },
  { id: 'KeyC', value: 'c' },
  { id: 'KeyV', value: 'v' },
  { id: 'KeyB', value: 'b' },
  { id: 'KeyN', value: 'n' },
  { id: 'KeyM', value: 'm' },
  { id: 'Comma', value: ',', alt: '<' },
  { id: 'Period', value: '.', alt: '>' },
  { id: 'Slash', value: '/', alt: '?' },
  { id: 'ArrowUp', value: '▲' },
  { id: 'ShiftRight', value: 'Shift' },
  { id: 'ControlLeft', value: 'Ctrl' },
  { id: 'MetaLeft', value: 'Win' },
  { id: 'AltLeft', value: 'Alt' },
  { id: 'Space', value: ' ' },
  { id: 'AltRight', value: 'Alt' },
  { id: 'ControlRight', value: 'Ctrl' },
  { id: 'ArrowLeft', value: '◄' },
  { id: 'ArrowDown', value: '▼' },
  { id: 'ArrowRight', value: '►' },
  { id: 'Delete', value: 'Del', alt: 'Del' },
];

function renderElements() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.append(container);

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Virtual Keyboard';
  container.append(title);

  const subtitle = document.createElement('h3');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Keyboard for Windows. For switching language: press left ctrl + alt';
  container.append(subtitle);

  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  container.append(textArea);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  container.append(keyboard);
}

renderElements();

const TEXT_AREA = document.querySelector('.textarea');

function renderButtons(data) {
  const keyboard = document.querySelector('.keyboard');

  data.forEach((el) => {
    const keyButton = document.createElement('div');
    const keySpanButton = document.createElement('span');
    const keySpanAlt = document.createElement('span');
    keySpanAlt.className = `${el.id} alt hidden`;
    keySpanButton.className = `${el.id}`;
    keyButton.className = `key ${el.id}`;
    if (el.id === 'Backspace' || el.id === 'Tab' || el.id === 'ShiftRight' || el.id === 'ShiftLeft' || el.id === 'CapsLock' || el.id === 'Enter') {
      keyButton.className += ' key-large';
    }
    if (el.id === 'Backspace' || el.id === 'Tab' || el.id === 'ShiftRight' || el.id === 'ShiftLeft' || el.id === 'CapsLock' || el.id === 'Enter') {
      keySpanButton.className += ' key-large';
    }
    if (el.id === 'Space') keyButton.className += ' key-space';
    if (el.id === 'Space') keySpanButton.className += ' key-space';
    if (el.id[0] === 'K') keySpanButton.className += ' character';
    if (
      el.id[0] === 'D' || el.id === 'Backquote' || el.id === 'Minus' || el.id === 'Equal' || el.id === 'BracketLeft' || el.id === 'BracketRight'
      || el.id === 'Backslash' || el.id === 'Semicolon' || el.id === 'Quote' || el.id === 'Comma' || el.id === 'Period' || el.id === 'Slash'
    ) {
      keySpanButton.className = `${el.id} main`;
      keySpanAlt.textContent = el.alt;
      keyButton.append(keySpanAlt);
    }
    keySpanButton.textContent = el.value;
    keyButton.append(keySpanButton);
    keyboard.append(keyButton);
  });
}

renderButtons(dataButtonsEn);

function keyDownClickHandler() {
  const keySpan = document.querySelectorAll('span');
  // const key = document.querySelectorAll('div');
  window.addEventListener('keydown', (e) => {
    TEXT_AREA.focus();
    keySpan.forEach((el) => {
      if (
        el.classList.contains(e.code) && !el.classList.contains('hidden') && !el.classList.contains('upper-case') && e.code !== 'CapsLock' && e.code !== 'AltLeft'
        && e.code !== 'AltRight' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight' && e.code !== 'Tab' && e.code !== 'Delete' && e.code !== 'MetaLeft'
        && e.code !== 'Enter' && e.code !== 'ControlLeft' && e.code !== 'ControlRight' && e.code !== 'Backspace'
      ) {
        e.preventDefault();
        TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }

      if (el.classList.contains(e.code) && !el.classList.contains('hidden') && el.classList.contains('upper-case')) {
        e.preventDefault();
        TEXT_AREA.setRangeText(el.textContent.toUpperCase(), TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }

      if (e.code === 'Tab') {
        if (el.classList.contains('Tab')) {
          e.preventDefault();
          TEXT_AREA.setRangeText('  ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }

      if (e.code === 'AltLeft' || e.code === 'AltRight') {
        if (el.classList.contains('AltLeft') || el.classList.contains('AltRight')) {
          e.preventDefault();
          TEXT_AREA.setRangeText('', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }

      if (e.code === 'CapsLock') {
        if (el.classList.contains('character')) el.classList.toggle('upper-case');
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        if (el.classList.contains('character')) el.classList.add('upper-case');
        if (el.classList.contains('main')) el.classList.add('hidden');
        if (el.classList.contains('alt')) el.classList.remove('hidden');
      }
    });
    keySpan.forEach((el) => {
      if (el.classList.contains(e.code)) {
        if (!el.classList.contains('CapsLock')) {
          el.classList.add('key-active');
        }
      }
      if (e.code === 'CapsLock') {
        if (el.classList.contains('CapsLock')) el.classList.toggle('key-active');
      }
    });
  });
}

function keyUpClickHandler() {
  const keySpan = document.querySelectorAll('span');
  // const key = document.querySelectorAll('div');
  window.addEventListener('keyup', (e) => {
    keySpan.forEach((el) => {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        if (el.classList.contains('character')) el.classList.remove('upper-case');
        if (el.classList.contains('main')) el.classList.remove('hidden');
        if (el.classList.contains('alt')) el.classList.add('hidden');
      }
    });
    keySpan.forEach((el) => {
      if (el.classList.contains(e.code)) {
        if (!el.classList.contains('CapsLock')) {
          el.classList.remove('key-active');
        }
      }
    });
  });
}

keyUpClickHandler();
keyDownClickHandler();

function mouseUpClickHandler() {
  const key = document.querySelectorAll('span');
  const char = document.querySelectorAll('.character');
  const main = document.querySelectorAll('.main');
  const alt = document.querySelectorAll('.alt');

  key.forEach((el) => {
    el.addEventListener('mouseup', () => {
      const start = TEXT_AREA.selectionStart;
      const breakLne = '\n';
      if (
        !el.classList.contains('upper-case') && !el.classList.contains('Enter') && !el.classList.contains('Backspace') && !el.classList.contains('Delete')
        && !el.classList.contains('Space') && !el.classList.contains('Tab') && !el.classList.contains('CapsLock') && !el.classList.contains('ShiftLeft')
        && !el.classList.contains('ShiftRight') && !el.classList.contains('AltLeft') && !el.classList.contains('AltRight')
        && !el.classList.contains('ControlLeft') && !el.classList.contains('ControlRight') && !el.classList.contains('MetaLeft')
      ) {
        TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }

      if (el.classList.contains('upper-case')) {
        TEXT_AREA.setRangeText(el.textContent.toUpperCase(), TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }

      if (el.classList.contains('Enter')) {
        TEXT_AREA.value = TEXT_AREA.value.substring(0, TEXT_AREA.selectionStart)
        + breakLne + TEXT_AREA.value.substring(TEXT_AREA.selectionEnd, TEXT_AREA.value.length);
        TEXT_AREA.selectionStart = start + 1;
        TEXT_AREA.selectionEnd = start + 1;
        TEXT_AREA.focus();
      }

      if (el.classList.contains('Backspace')) {
        TEXT_AREA.value = TEXT_AREA.value.substring(0, TEXT_AREA.selectionStart - 1)
        + TEXT_AREA.value.substring(TEXT_AREA.selectionStart, TEXT_AREA.value.length);
        TEXT_AREA.selectionStart = start - 1;
        TEXT_AREA.selectionEnd = start - 1;
        TEXT_AREA.focus();
      }

      if (el.classList.contains('Delete')) {
        TEXT_AREA.value = TEXT_AREA.value.substring(0, TEXT_AREA.selectionStart)
        + TEXT_AREA.value.substring(TEXT_AREA.selectionStart + 1, TEXT_AREA.value.length);
        TEXT_AREA.selectionStart = start;
        TEXT_AREA.selectionEnd = start;
        TEXT_AREA.focus();
      }

      if (el.classList.contains('Space')) {
        TEXT_AREA.setRangeText(' ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }

      if (el.classList.contains('Tab')) {
        TEXT_AREA.setRangeText('    ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }
      if (el.classList.contains('CapsLock')) {
        char.forEach((ch) => {
          ch.classList.toggle('upper-case');
        });
      }
      if (el.classList.contains('ShiftLeft') || el.classList.contains('ShiftRight')) {
        char.forEach((ch) => {
          ch.classList.remove('upper-case');
        });
        main.forEach((mn) => {
          mn.classList.remove('hidden');
        });
        alt.forEach((al) => {
          al.classList.add('hidden');
        });
      }

      if (!el.classList.contains('CapsLock')) {
        el.classList.remove('key-active');
      }
    });

    el.addEventListener('mousedown', () => {
      if (!el.classList.contains('CapsLock')) {
        el.classList.add('key-active');
      }
      if (el.classList.contains('ShiftLeft') || el.classList.contains('ShiftRight')) {
        char.forEach((ch) => {
          ch.classList.add('upper-case');
        });
        main.forEach((mn) => {
          mn.classList.add('hidden');
        });
        alt.forEach((al) => {
          al.classList.remove('hidden');
        });
      }
    });

    el.addEventListener('click', () => {
      if (el.classList.contains('CapsLock')) {
        el.classList.toggle('key-active');
      }
    });

    el.addEventListener('mouseout', () => {
      if (!el.classList.contains('CapsLock')) {
        el.classList.remove('key-active');
      }
    });
  });
}
mouseUpClickHandler();
