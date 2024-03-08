"use client"
import Image from "next/image";
import { useState } from "react"; 
import alienPlanets from "../lib/alien-planets.jsx";

export default function Home() {
  const[planets,setPlanets]= useState(alienPlanets);

return (
   
  <div id="main">
   
      {
        planets.map((planet) => {
          return (<div >
            <div key={planet.id} className="planet-container">
              <h6> {planet.emoji}</h6>
            
            
    
              <h6>{planet.name}</h6>
              <p>{planet.name} is
                {planet.distanceFromEarth} miles from earth.{planet.name} is believed to has life {planet.hasLife}.
                the atmosphere of {planet.name} is {planet.atmosphere}.
              </p>
            </div>
          </div>);
              // Zorbon is 320 light years miles from earth.Zorbon is believed to have life. 
              // The atmosphere of Zorbon is nitrogen - oxygen.
           
        })}
</div>);
}
//  const [dragons, setDragons] = useState(defaultDragons);
//   console.log(defaultDragons);

//   return (
//     <div>
//       <h1>Dragons</h1>
//       {
//         dragons.map((dragon) => {
//           console.log(dragon);
//           return (
//             <div>
//               <div key={dragon.id} className="dragon-container">
//                 <p>{dragon.id}</p>
//                 <h2>{dragon.name}</h2>
//                 <p>{dragon.emoji}</p>
//                 <p>{dragon.color}</p>
//                 <p>{dragon.size}</p>
//                 <p>{dragon.ability}</p>
//                 <p>{dragon.habitat}</p>
//                 <p>{dragon.age}</p>

//               </div>
//               <Divider />
//             </div>
//           );
     
    
//         })}
//     </div>  
// )};