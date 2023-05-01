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
  { id: 'KeyQ', value: 'q', ru: 'й' },
  { id: 'KeyW', value: 'w', ru: 'ц' },
  { id: 'KeyE', value: 'e', ru: 'у' },
  { id: 'KeyR', value: 'r', ru: 'к' },
  { id: 'KeyT', value: 't', ru: 'е' },
  { id: 'KeyY', value: 'y', ru: 'н' },
  { id: 'KeyU', value: 'u', ru: 'г' },
  { id: 'KeyI', value: 'i', ru: 'ш' },
  { id: 'KeyO', value: 'o', ru: 'щ' },
  { id: 'KeyP', value: 'p', ru: 'з' },
  {
    id: 'BracketLeft',
    value: '[',
    alt: '{',
    ru: 'х',
  },
  {
    id: 'BracketRight',
    value: ']',
    alt: '}',
    ru: 'ъ',
  },
  { id: 'Backslash', value: '\\', alt: '|' },
  { id: 'CapsLock', value: 'CapsLock' },
  { id: 'KeyA', value: 'a', ru: 'ф' },
  { id: 'KeyS', value: 's', ru: 'ы' },
  { id: 'KeyD', value: 'd', ru: 'в' },
  { id: 'KeyF', value: 'f', ru: 'а' },
  { id: 'KeyG', value: 'g', ru: 'п' },
  { id: 'KeyH', value: 'h', ru: 'р' },
  { id: 'KeyJ', value: 'j', ru: 'о' },
  { id: 'KeyK', value: 'k', ru: 'л' },
  { id: 'KeyL', value: 'l', ru: 'д' },
  {
    id: 'Semicolon',
    value: ';',
    alt: ':',
    ru: 'ж',
  },
  {
    id: 'Quote',
    value: "'",
    alt: '"',
    ru: 'э',
  },
  { id: 'Enter', value: 'Enter' },
  { id: 'ShiftLeft', value: 'Shift' },
  { id: 'KeyZ', value: 'z', ru: 'я' },
  { id: 'KeyX', value: 'x', ru: 'ч' },
  { id: 'KeyC', value: 'c', ru: 'с' },
  { id: 'KeyV', value: 'v', ru: 'м' },
  { id: 'KeyB', value: 'b', ru: 'и' },
  { id: 'KeyN', value: 'n', ru: 'т' },
  { id: 'KeyM', value: 'm', ru: 'ь' },
  {
    id: 'Comma',
    value: ',',
    alt: '<',
    ru: 'б',
  },
  {
    id: 'Period',
    value: '.',
    alt: '>',
    ru: 'ю',
  },
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
    const keyButtonEn = document.createElement('div');
    const keyButtonRu = document.createElement('div');
    const keySpanButtonEN = document.createElement('span');
    const keySpanButtonRu = document.createElement('span');
    const keySpanAlt = document.createElement('span');
    const keySpanMain = document.createElement('span');

    keyButtonRu.className = 'ru';
    keyButtonEn.className = 'en ';
    keySpanAlt.className = `${el.id} alt hidden`;
    keySpanMain.className = `${el.id} main`;

    keyButton.className = `key ${el.id}`;
    if (el.id === 'Backspace' || el.id === 'Tab' || el.id === 'ShiftRight' || el.id === 'ShiftLeft' || el.id === 'CapsLock' || el.id === 'Enter') {
      keyButton.className += `${el.id} key-large`;
      keySpanButtonEN.className += `${el.id} key-large`;
      keySpanButtonEN.textContent = el.value;
      keyButton.append(keySpanButtonEN);
    }
    if (el.id === 'Space') {
      keyButton.className += ' key-space';
      keySpanButtonEN.className += `${el.id} key-space`;
      keyButton.append(keySpanButtonEN);
    }
    if (el.id[0] === 'K') {
      keySpanButtonEN.className += `${el.id} en character`;
      keySpanButtonRu.className += `${el.id} ru character`;
      keySpanButtonRu.textContent = el.ru;
      keySpanButtonEN.textContent = el.value;
      keyButtonRu.append(keySpanButtonRu);
      keyButtonEn.append(keySpanButtonEN);
      keyButton.append(keyButtonEn);
      keyButton.append(keyButtonRu);
    }

    if (el.id === 'BracketLeft' || el.id === 'BracketRight' || el.id === 'Semicolon' || el.id === 'Quote' || el.id === 'Comma' || el.id === 'Period') {
      keySpanButtonRu.className += `${el.id} ru character`;
      keySpanButtonRu.textContent = el.ru;
    }
    if (
      el.id === 'Slash' || el.id === 'Backquote' || el.id === 'Minus' || el.id === 'Equal' || el.id === 'Backslash' || el.id[1] === 'i'
    ) {
      keySpanAlt.textContent = el.alt;
      keySpanMain.textContent = el.value;
      keyButton.append(keySpanMain);
      keyButton.append(keySpanAlt);
    }

    if (el.id === 'BracketLeft' || el.id === 'BracketRight' || el.id === 'Semicolon' || el.id === 'Quote' || el.id === 'Comma' || el.id === 'Period') {
      keySpanMain.textContent = el.value;
      keyButton.append(keySpanMain);
      keySpanMain.classList = `${el.id} en`;
      keySpanButtonRu.textContent = el.ru;
      keyButtonRu.append(keySpanButtonRu);
      keyButton.append(keyButtonRu);
    }

    if (el.id === 'ControlLeft' || el.id === 'ControlRight' || el.id === 'MetaLeft' || el.id === 'Delete' || el.id === 'AltLeft' || el.id === 'AltRight'
    || el.id === 'ArrowLeft' || el.id === 'ArrowUp' || el.id === 'ArrowDown' || el.id === 'ArrowRight') {
      keySpanMain.textContent = el.value;
      keySpanMain.classList = ` ${el.id}`;
      keyButton.append(keySpanMain);
    }

    keyboard.append(keyButton);
  });
}

renderButtons(dataButtonsEn);

let flag = false;
let langRu;

function setLocalStorage() {
  if (langRu === true)localStorage.setItem('language', true);
  if (langRu === false)localStorage.setItem('language', false);
}

function getLocalStorage() {
  if (localStorage.getItem('language') === 'true') langRu = true;
  if (localStorage.getItem('language') === 'false') langRu = false;
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');
  ru.forEach((elem) => {
    if (langRu) elem.classList.remove('hidden');
    if (!langRu) elem.classList.add('hidden');
  });
  en.forEach((elem) => {
    if (langRu) elem.classList.add('hidden');
    if (!langRu) elem.classList.remove('hidden');
  });
}

function localStorageHandler() {
  window.addEventListener('beforeunload', () => {
    const ru = document.querySelectorAll('.ru');
    ru.forEach((elem) => {
      if (elem.classList.contains('hidden')) langRu = false;
    });
    const en = document.querySelectorAll('.en');
    en.forEach((elem) => {
      if (elem.classList.contains('hidden')) langRu = true;
    });
    setLocalStorage();
  });
  window.addEventListener('load', getLocalStorage);
}

localStorageHandler();

function keyDownClickHandler() {
  const keySpan = document.querySelectorAll('span');
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');

  window.addEventListener('keydown', (e) => {
    TEXT_AREA.focus();
    keySpan.forEach((el) => {
      if (
        el.classList.contains(e.code) && !el.classList.contains('hidden') && !el.classList.contains('upper-case') && e.code !== 'CapsLock' && e.code !== 'AltLeft'
        && e.code !== 'AltRight' && e.code !== 'ShiftLeft' && e.code !== 'ShiftRight' && e.code !== 'Tab' && e.code !== 'Delete' && e.code !== 'MetaLeft'
        && e.code !== 'Enter' && e.code !== 'Space' && e.code !== 'ControlLeft' && e.code !== 'ControlRight' && e.code !== 'Backspace'
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

      if (e.code === 'ControlLeft') flag = true;
      if (e.code === 'AltLeft' && flag) {
        flag = false;
        en.forEach((eng) => {
          eng.classList.toggle('hidden');
        });
        ru.forEach((rus) => {
          rus.classList.toggle('hidden');
        });
      }

      if (e.code === 'Tab') {
        if (el.classList.contains('Tab')) {
          e.preventDefault();
          TEXT_AREA.setRangeText('    ', TEXT_AREA.selectionStart, TEXT_AREA.selectionEnd, 'end');
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
  const ru = document.querySelectorAll('.ru');
  const en = document.querySelectorAll('.en');

  key.forEach((el) => {
    el.addEventListener('mouseup', () => {
      const start = TEXT_AREA.selectionStart;
      const breakLne = '\n';
      if (
        !el.classList.contains('upper-case') && !el.classList.contains('Enter') && !el.classList.contains('Backspace') && !el.classList.contains('Delete')
        && !el.classList.contains('Space') && !el.classList.contains('Tab') && !el.classList.contains('CapsLock') && !el.classList.contains('ShiftLeft')
        && !el.classList.contains('ShiftRight') && !el.classList.contains('AltLeft') && !el.classList.contains('AltRight') && !el.classList.contains('ControlLeft')
        && !el.classList.contains('ControlRight') && !el.classList.contains('MetaLeft')
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

      if (el.classList.contains('ControlLeft')) {
        en.forEach((eng) => {
          eng.classList.remove('hidden');
        });
        ru.forEach((rus) => {
          rus.classList.add('hidden');
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

      if (el.classList.contains('ControlLeft')) {
        en.forEach((eng) => {
          eng.classList.add('hidden');
        });
        ru.forEach((rus) => {
          rus.classList.remove('hidden');
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
