export function typingEffect(element, text) {
    let index = 0;
    element.innerHTML = '';
    const interval = setInterval(() => {
      element.innerHTML += text.charAt(index);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100);
  }
  