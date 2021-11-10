 const solarSystem = [{
     name: "Sun",
     radius: 696340,
     surface: "star"
   },
   {
     name: "Mercury",
     radius: 2440,
     surface: "terrestrial"
   },
   {
     name: "Venus",
     radius: 6052,
     surface: "terrestrial"
   },
   {
     name: "Earth",
     radius: 6371,
     surface: "terrestrial"
   },
   {
     name: "Mars",
     radius: 3389,
     surface: "terrestrial"
   },
   {
     name: "Jupiter",
     radius: 69911,
     surface: "gas giant"
   },
   {
     name: "Saturn",
     radius: 58232,
     surface: "gas giant"
   },
   {
     name: "Uranus",
     radius: 25362,
     surface: "ice giant"
   },
   {
     name: "Neptune",
     radius: 24622,
     surface: "ice giant"
   },
 ];


 const itaMap = (pianeti) => {
   switch (pianeti.name) {
     case "Sun":
       pianeti.name = "Sole";
       break;
     case "Mercury":
       pianeti.name = "Mercurio";
       break;
     case "Venus":
       pianeti.name = "Venere";
       break;
     case "Earth":
       pianeti.name = "Terra";
       break;
     case "Mars":
       pianeti.name = "Marte";
       break;
     case "Jupiter":
       pianeti.name = "Giove";
       break;
     case "Saturn":
       pianeti.name = "Saturno";
       break;
     case "Uranus":
       pianeti.name = "Urano";
       break;
     case "Neptune":
       pianeti.name = "Nettuno";
       break;
   }
   return pianeti
 }

 const itaPlanet = solarSystem.map(itaMap)
//  console.log(itaPlanet)

// definisce il diametro dei piani tramite una funzione
 const diametro = (pianeti) => {
   pianeti.diametro = pianeti.radius * 2;
  return pianeti
}


const diametroP = solarSystem.map(itaMap).map(diametro)
console.log(diametroP)


// restituisce solo il diametro dei pianteni tramite una funzione 
const diameter = solarSystem.map(d => d.radius *2);
console.log (diameter);