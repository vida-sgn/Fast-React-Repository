import "./App.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {};
  return (
    <header>
      <h1 style={style} className="container">
        Fast React Pizza CO.
      </h1>
    </header>
  );
}
function Menu() {
  const pizzass = pizzaData;
  const numPizza = pizzass.length;
  return (
    <main className="menu ">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          <ul className="pizzas">
            {pizzass.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we're still working on menu. please come back later</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
    </li>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const openHour = 7;
  const closeHour = 12;
  const isOpen = hours >= openHour && hours <= closeHour;
  console.log(hours);
  // if (hours >= openHour && hours <= closeHour) alert("we are currently open");
  // else alert("Sorry, we are closed :(");
  return (
    <footer className="footer ">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome to you {closeHour}:00 until {openHour}:00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open untile {closeHour}:00 . please come or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
