export let num = 0;

num = await new Promise((resolve) => {
  setTimeout(() => resolve(1), 1000);
});
