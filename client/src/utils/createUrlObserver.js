const config = { subtree: true, childList: true };

const createUrlObserver = callback => {
  let previousUrl = '';
  const observer = new MutationObserver(() => {
    if (location.href !== previousUrl) {
      previousUrl = location.href;
      callback();
    }
  });

  observer.observe(document, config);

  return observer;
};

export default createUrlObserver;
