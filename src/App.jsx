import { useDispatch, useSelector } from "react-redux";
import { addTopping } from "./pizzaSlice";

export default function App() {
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
      <button onClick={() => dispatch(addTopping("pepperoni"))}>
        Add Pepporoni
      </button>
    </>
  );
}
