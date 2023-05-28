import { RootState } from "./app/store";
import { reset, addMany, addOne } from "./slices/counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  return (
    <>
      <h1>Hello</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addOne())}>Add 1</button>
      <button onClick={() => dispatch(addMany(2))}>Add 2</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default App;
