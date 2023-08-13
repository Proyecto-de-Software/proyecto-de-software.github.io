const Link = {
  replace: (selector, value) => {
    const adminLink = document.querySelector(selector)

    const oldText = adminLink.textContent
    const newText = oldText.replace(/[0-9]+/g, `${value}`);

    adminLink.innerHTML = adminLink.innerHTML.replace(oldText, newText);
    adminLink.href = adminLink.href.replace(/grupo[0-9]+/g, `grupo${value}`);
  },
  parseInput: (value) => {
    const inputValue = parseInt(value,10) || 0;
    return (inputValue < 10) ? '0'+inputValue : inputValue;
  },
  change: (event) => {
    const value = Link.parseInput(event.target.value)
    Link.replace("#admin-link", value);
    Link.replace("#portal-link", value);
  }
};

document.querySelector("#number").addEventListener('input', Link.change);

