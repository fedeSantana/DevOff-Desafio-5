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
            <div id="pikachu" class="pokeCarrusel__pokemonBefore">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" />
            </div>
            <div class="pokeCarrusel__pokemon">
              <img
                class="pokeCarrusel__image"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
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
