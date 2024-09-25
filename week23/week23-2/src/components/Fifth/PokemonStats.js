const PokemonStats = ({ pokemon }) => {
   return (
     <div>
       <h2>{pokemon.name}</h2>
       <img 
         src={pokemon.sprites.front_default} 
         alt={pokemon.name} 
         style={{ width: '150px', height: '150px' }} 
       />
       <ul>
         {pokemon.stats.map(stat => (
           <li key={stat.stat.name}>
             {stat.stat.name}: {stat.base_stat}
           </li>
         ))}
       </ul>
     </div>
   );
 };
 
 export default PokemonStats;
 