import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);

  console.log(db);
  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Collection</h2>

        <div className="row mt-5"></div>
        {data.map((guitar) => {
          return <Guitar guitar={guitar} />;
        })}
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
