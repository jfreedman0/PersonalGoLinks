function redirect(request) {
    const prefix = 'http://go/';
    const path = request.url.slice(prefix.length);
    return { redirectUrl: 'http://localhost:5000/go/' + path };
  }
  
  browser.webRequest.onBeforeRequest.addListener(redirect, { urls: ['http://go/*']}, ['blocking']);
  