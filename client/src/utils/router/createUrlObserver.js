const config = { subtree: true, childList: true };

const createUrlObserver = callback => {
  let previousUrl = '';
  const observer = new MutationObserver(() => {
    const { pathname } = location;
    if (pathname !== previousUrl) {
      previousUrl = pathname;
      callback();
    }
  });

  observer.observe(document, config);

  return observer;
};

export default createUrlObserver;
