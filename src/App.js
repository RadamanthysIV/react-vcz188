import React from 'react';
import Counter from './Counter';

sahjbdvkasdjas;

const menu = [
  { name: 'Pizza', dessert: false },
  { name: 'Empanadas', dessert: false },
  { name: 'Pastas', dessert: false },
  { name: 'Hamburguesa', dessert: false },
  { name: 'Flan', dessert: true },
  { name: 'Budin de Pan', dessert: true },
];

function App() {
  return (
    <div>
      <h2>Comida</h2>
      {menu.map((item) => {
        return !item.dessert ? <Counter label={item.name} /> : null;
      })}

      <h2>Postres</h2>
      {menu.map((item) => {
        return item.dessert ? <Counter label={item.name} /> : null;
      })}
    </div>
  );
}

export default App;
pepehongo;
