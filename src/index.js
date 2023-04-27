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
  { id: 'ControlRight', value: 'Ctrl' },
  { id: 'ArrowLeft', value: '◄' },
  { id: 'ArrowDown', value: '▼' },
  { id: 'ArrowRight', value: '►' },
  { id: 'Delete', value: 'Del' },
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
    keyButton.className = `key ${el.id}`;
    if (el.id === 'Backspace' || el.id === 'Tab' || el.id === 'ShiftRight' || el.id === 'ShiftLeft' || el.id === 'CapsLock' || el.id === 'Enter') {
      keyButton.className += ' key-large';
    }
    if (el.id === 'Space') keyButton.className += ' key-space';
    if (el.id[0] === 'K') keyButton.className += ' character';

    keyButton.textContent = el.value;

    keyboard.append(keyButton);
  });
}

renderButtons(dataButtonsEn);

function keyClickHandler() {
  const key = document.querySelectorAll('.key');
  window.addEventListener('keydown', (e) => {
    key.forEach((el) => {
      if (e.code === 'AltLeft' || e.code === 'AltRight') {
        if (el.classList.contains('AltLeft') || el.classList.contains('AltRight')) {
          e.preventDefault();
          TEXT_AREA.setRangeText('', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
      if (e.code === 'ArrowLeft') {
        if (el.classList.contains('ArrowLeft')) {
          e.preventDefault();
          TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
      if (e.code === 'ArrowRight') {
        if (el.classList.contains('ArrowRight')) {
          e.preventDefault();
          TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
      if (e.code === 'ArrowDown') {
        if (el.classList.contains('ArrowDown')) {
          e.preventDefault();
          TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
      if (e.code === 'ArrowUp') {
        if (el.classList.contains('ArrowUp')) {
          e.preventDefault();
          TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
      if (e.code === 'Tab') {
        if (el.classList.contains('Tab')) {
          e.preventDefault();
          TEXT_AREA.setRangeText('    ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
      if (e.code === 'CapsLock') {
        if (el.classList.contains('CapsLock')) el.classList.toggle('key-active');
        if (el.classList.contains('character')) el.classList.toggle('upper-case');
      }

      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        if (el.classList.contains('character')) el.classList.add('upper-case');
      }
      if (el.classList.contains(e.code)) {
        if (!el.classList.contains('CapsLock')) {
          el.classList.add('key-active');
        }
        document.querySelector('.textarea').focus();
        if (el.classList.contains('upper-case')) {
          e.preventDefault();
          TEXT_AREA.setRangeText(el.textContent.toUpperCase(), TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
          TEXT_AREA.focus();
        }
      }
    });
  });

  window.addEventListener('keyup', (e) => {
    key.forEach((el) => {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        if (el.classList.contains('character')) el.classList.remove('upper-case');
      }
      if (el.classList.contains(e.code)) {
        if (!el.classList.contains('CapsLock')) {
          el.classList.remove('key-active');
        }
      }
    });
  });

  key.forEach((el) => {
    el.addEventListener('mousedown', () => {
      if (!el.classList.contains('CapsLock')) {
        el.classList.add('key-active');
      }
      if (el.classList.contains('ShiftLeft') || el.classList.contains('ShiftRight')) {
        key.forEach((elem) => {
          if (elem.classList.contains('character')) elem.classList.add('upper-case');
        });
      }
    });
    el.addEventListener('mouseup', () => {
      const start = TEXT_AREA.selectionStart;
      const breakLne = '\n';
      if (el.classList.contains('Enter')) {
        TEXT_AREA.value = TEXT_AREA.value.substring(0, TEXT_AREA.selectionStart) + breakLne
        + TEXT_AREA.value.substring(TEXT_AREA.selectionEnd, TEXT_AREA.value.length);
        TEXT_AREA.selectionStart = start + 1;
        TEXT_AREA.selectionEnd = start + 1;
        TEXT_AREA.focus();
      } else if (el.classList.contains('Backspace')) {
        TEXT_AREA.value = TEXT_AREA.value.substring(0, TEXT_AREA.selectionStart - 1)
        + TEXT_AREA.value.substring(TEXT_AREA.selectionStart, TEXT_AREA.value.length);
        TEXT_AREA.selectionStart = start - 1;
        TEXT_AREA.selectionEnd = start - 1;
        TEXT_AREA.focus();
      } else if (el.classList.contains('Delete')) {
        TEXT_AREA.value = TEXT_AREA.value.substring(0, TEXT_AREA.selectionStart)
        + TEXT_AREA.value.substring(TEXT_AREA.selectionStart + 1, TEXT_AREA.value.length);
        TEXT_AREA.selectionStart = start;
        TEXT_AREA.selectionEnd = start;
        TEXT_AREA.focus();
        // TEXT_AREA.value = TEXT_AREA.value.replace(/\n/g, '');
      } else if (el.classList.contains('Space')) {
        TEXT_AREA.setRangeText(' ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      } else if (el.classList.contains('Tab')) {
        TEXT_AREA.setRangeText('    ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      } else if (el.classList.contains('CapsLock') || el.classList.contains('ShiftLeft') || el.classList.contains('ShiftRight')) {
        TEXT_AREA.setRangeText('', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      } else if (el.classList.contains('upper-case')) {
        TEXT_AREA.setRangeText(el.textContent.toUpperCase(), TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      } else {
        TEXT_AREA.setRangeText(el.textContent, TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
        TEXT_AREA.focus();
      }
      if (!el.classList.contains('CapsLock')) {
        el.classList.remove('key-active');
      }
      if (el.classList.contains('ShiftLeft') || el.classList.contains('ShiftRight')) {
        key.forEach((elem) => {
          elem.classList.remove('upper-case');
        });
      }
    });

    el.addEventListener('click', () => {
      if (el.classList.contains('CapsLock')) {
        key.forEach((elem) => {
          if (elem.classList.contains('character')) elem.classList.toggle('upper-case');
        });
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

keyClickHandler();
