export default function Pokedex() {
    return (
        <div className="pokemonRow">
            <div className="pokeCard--fire">
                <div className="pokeCard_content">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" className="pokeCard__image" />
                    <div className="pokeCard__box">
                        <div className="pokeCard__imageSpace"></div>
                        <h3 className="pokeCard__name">Charmander</h3>
                        <div className="pokeCard__typesContainer">
                            <div className="pokeCard__typeContainer">
                                <div className="pokeCard__typeBackdrop"></div>
                                <p className="pokeCard__type">dragon</p>
                                <div className="pokeCard__typeOverlay"></div>
                            </div>
                            <div className="pokeCard__typeContainer">
                                <div className="pokeCard__typeBackdrop"></div>
                                <p className="pokeCard__type">dragon</p>
                                <div className="pokeCard__typeOverlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg className="pokeCard__background" width="240" height="110" viewBox="0 0 240 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="240" height="110">
                        <rect width="240" height="110" rx="55" fill="#7CCD55" />
                    </mask>
                    <g mask="url(#mask0)">
                        <rect className="pokeCard__colorLayer" width="240" height="110" rx="55" fill="inherit" />
                        <g className="mixBlendMode">
                            <path d="M54.2349 36.5978C33.7367 26.3488 0 31.4733 0 31.4733V-1.5H240V31.4733C240 31.4733 205.409 26.3488 184.911 36.5978C164.413 43.4306 140.071 67.838 119.573 68.1993C99.0747 68.6177 74.7331 43.4306 54.2349 36.5978Z" fill="#979797" />
                        </g>
                        <g className="mixBlendMode">
                            <circle cx="211.5" cy="89.5" r="14.5" fill="#979797" />
                            <path d="M264 95C264 107.73 258.416 119.939 248.477 128.941C238.537 137.943 225.056 143 211 143C196.944 143 183.463 137.943 173.523 128.941C163.584 119.939 158 107.73 158 95L186.447 95C186.447 100.898 189.034 106.553 193.638 110.724C198.243 114.894 204.488 117.237 211 117.237C217.512 117.237 223.757 114.894 228.362 110.724C232.966 106.553 235.553 100.898 235.553 95H264Z" fill="#979797" />
                            <path d="M264 85C264 72.2696 258.416 60.0606 248.477 51.0589C238.537 42.0571 225.056 37 211 37C196.944 37 183.463 42.0571 173.523 51.0589C163.584 60.0606 158 72.2696 158 85L186.447 85C186.447 79.1025 189.034 73.4465 193.638 69.2764C198.243 65.1062 204.488 62.7634 211 62.7634C217.512 62.7634 223.757 65.1062 228.362 69.2764C232.966 73.4465 235.553 79.1025 235.553 85H264Z" fill="#979797" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>

    );
}
