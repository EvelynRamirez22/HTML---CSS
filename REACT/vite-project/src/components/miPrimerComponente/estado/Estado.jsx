//Hooks -> useState

import { useEffect, useState } from "react";

//camelcase es la manera de escribir en la cual la palabra nueva arranca con mayuscula

//

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  //si no le pasan el array de dependencias siempre se va a ejecutar siempre.
  //el useEffect se va a ejecutar la cantidad de veces que las dependencias se actualizen (las dependencias van en el corchete)
  //si no le pasan dependencias se ejecutara solo al principio de la app, en el primer render

  useEffect(() => {
    console.log("El contador se ha actualizado");
  }, [contador]);

  const arrayPersonaje = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div>
        {
          //cuando despues de la funcin flecha hay parentesis significa que el return es implicito, se retorna todo lo del parentesis

          arrayPersonaje.map((personaje, i) => (
            <div key={i}>
              <h2>
                {personaje.name}
                {personaje.lastName}
              </h2>
              <p>Planet: {personaje.planet}</p>
              <img src={personaje.image} alt="description" />
            </div>
          ))
        }
      </div>

      <button onClick={handleClick}>Aumentar</button>
      <p>{contador}</p>
    </>
  );
};
