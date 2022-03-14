import './App.css';
import items from "./data";
import useState from "react";
import Categories from './Categories';

const allcat = ["all" , ...new Set(items.map((item)=> item.category))]


function App() {

  const [menuItems , setMenuItems] = useState(items);
  const [cat , setCat] = useState(allcat);

  return (
   <main>
       <section>
         <div className="title">
           <h2>Our Menu</h2>
           <div className="underline"></div>
           </div>
           <Categories cat={cat} />
       </section>
   </main>
  );
}

export default App;
