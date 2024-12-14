import React, { useState } from 'react';


function App() {
 
  const [counter, setCounter] = useState(0);
  const [showProduct, setShowProduct] = useState(false);

  const increase = ()=>{
    setCounter(counter+1);
  }

const toggleProductDetails = () => {
  setShowProduct(!showProduct);
};

return (
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={increase}>Increase</button> 
    <br />
    <button onClick={toggleProductDetails}>Show Product</button>
    

    {showProduct && (
      <div>
        <h2>Product Details</h2>
        <p><strong>Name: </strong> iPhone 14</p>
        <p><strong>price: </strong> $1200</p>
        <p><strong>Description: </strong> A premium smartphone with advanced features.</p>
      </div>
    )}
  </div>
);

}

export default App;