import { useState } from "react";
import "./task2.css";
interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ShoppingCart() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Apple", price: 0.99, quantity: 0 },
    { id: 2, name: "Banana", price: 0.49, quantity: 0 },
    { id: 3, name: "Mango", price: 1.99, quantity: 0 },
    { id: 4, name: "Strawberry", price: 2.49, quantity: 0 },
  ]);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleMinusButton = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity === 0 ? 0 : item.quantity - 1 }
          : item
      )
    );
  };

  const handleAddButton = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleEmptyCart = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        return { ...item, quantity: 0 };
      })
    );
  };

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => handleMinusButton(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleAddButton(item.id)}>+</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p style={{ justifySelf: "center" }}>Total price: ${totalPrice}</p>
      <div style={{ justifySelf: "center" }}>
        <button>Checkout</button>
        <button onClick={handleEmptyCart}>Empty Cart</button>
      </div>
    </div>
  );
}
