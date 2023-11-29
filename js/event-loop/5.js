const iframe = document.createElement('iframe');
const html = `<body>
  Hello from iframe
  <script>
    for (let i = 0; i < 10000000000; i++) {}
  </script>
</body>`;

iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
iframe.type = 'text/javascript';

document.body.append(iframe);

setTimeout(() => console.log('setTimeout'), 100);

// Will the heavy synchronous code inside the iframe delay the execution of the setTimeout cb in the parent script?

// Try yourself and read the explanation: https://t.me/intspirit/800?comment=1065
