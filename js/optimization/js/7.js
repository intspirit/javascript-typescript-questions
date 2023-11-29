/*
<html>
  <head></head>
  <body>
    <main>
      <div>
        <ul class="a">
          <li>1</li>
          <li>2</li>
        </ul>
        <ul class="b">
          <li>1</li>
          <li>2</li>
          <li>
            <span class="c">3</span>
          </li>
          <li>4</li>
        </ul>
      </div>
    </main>
  </body>
</html>
*/

console.time('A');
let el = document.querySelector('main > div > ul li span');
console.timeEnd('A');

console.time('B');
let el2 = document.querySelector('.c');
console.timeEnd('B');

/*
Which of the querySelectors more efficient?

Try yourself and read the explanation: https://t.me/intspirit/774?comment=1002
*/
