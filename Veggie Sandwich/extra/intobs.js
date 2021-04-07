var divItem = document.querySelector('.slideInText');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.id === 'divItem') {
      divItem.innerText = entry.isIntersecting
        ? 'Completely Visible'
        : 'Not Completely Visible';
    }
  });
};

let observer = new IntersectionObserver(callback, options);
observer.observe(divItem);
