self.onmessage = (event) => {
  let obj = event.data;
  setTimeout(() => console.log(obj.foo), 1500);
}
