import { motion } from "framer-motion";

export default function PokeCarrusel() {
  return (
    <div class="pokeCarruselContainer">
      <div class="pokeCarrusel__backlight"></div>
      <div class="container">
        <div class="pokeCarrusel">
          <div class="pokeCarrusel__titleContainer">
            <h1 class="pokeCarrusel__title">Charizard</h1>
          </div>
          <div class="pokeCarrusel__display">
            <motion.div
              animate={{
                x: ["0%","50%","73%"],
               // left: "50%", // Puede tener efecto sobre el hijo, pero este elemento no tiene sentido con left. Si al hijo le pongo hinerit... para probar.
                y: ["0vw","10vw","23vw"],
               // top: "61%", // same as left
                scale: 2.5,
                //brightness: 100,

              }}
              transition={{ delay: 1 }}
            >
              <div id="pikachu" class="pokeCarrusel__pokemonBefore">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" />
              </div>
            </motion.div>
            <div class="pokeCarrusel__pokemon">
              <img
                class="pokeCarrusel__image"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              />
            </div>
            <div class="pokeCarrusel__pokemonAfter">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png" />
            </div>
          </div>
        </div>
        <div class="pokeInformation"></div>
      </div>
    </div>
  );
}
