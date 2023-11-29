self.onmessage = (event) => {
  let num = event.data;
  console.log(num.fib());
}
