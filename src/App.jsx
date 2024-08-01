import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
    const updatedCart =
      itemExists >= 0
        ? cart.map((guitar, index) =>
            index === itemExists
              ? { ...guitar, quantity: guitar.quantity + 1 }
              : guitar
          )
        : [...cart, { ...item, quantity: 1 }];
    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Collection</h2>

        <div className="row mt-5">
          {data.map((guitar) => {
            return (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                setCart={setCart}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </main>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
