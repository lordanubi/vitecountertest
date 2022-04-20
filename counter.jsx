function Counter(Component) {
  let count = 0;
  return function (...props) {
    return (
      <div>
        {++count}
        <Component {...props[0]} />
      </div>
    );
  };
}
export default Counter;
