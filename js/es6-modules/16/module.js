let foo = 'bar';

export { foo };
export default foo;

setTimeout(() => { foo = 'baz'; }, 1000);
