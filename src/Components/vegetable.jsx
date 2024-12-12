// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const VegetableList = () => {
//     const [vegetables, setVegetables] = useState(['Carrot', 'Broccoli']);
//     const [newVegetable, setNewVegetable] = useState('');
  
//     function handleNewVegetable(event){
//        setNewVegetable(event.target.value)
//     }

//     function additem(){
//       newVegetable.length > 0 && setVegetables(prev => [...prev,newVegetable])
//        setNewVegetable('');
//     }
 
//     return (
//       <div>
//            <input type='text' value={newVegetable} onChange={handleNewVegetable} />
//            <input type='button' onClick={additem} value= "add" />





//         <h1>Vegetable List</h1>
//         <ul>
//           {vegetables.map((vegetable, index) => (
//             <li key={index}>{vegetable}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={newVegetable}
//           onChange={(e) => setNewVegetable(e.target.value)}
//           placeholder="Add a new vegetable"
//         />
//         <button onClick={handleAddVegetable}>Add Vegetable</button>
//       </div>
//     );
//   };
// }

// export default App;
