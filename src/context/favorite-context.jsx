import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  total: 0,
  addFavorite: () => {},
  removeFavorite: () => {},
  isFvorite: false,
});

export function FavoriteContextProvider({children}) {
    const [favorites, setFavorites] = useState([])

    const context = {
      favorites,
      total: favorites.length,
      addFavorite,
      removeFavorite,
      isFvorite,
    };

    function addFavorite(place) {
        setFavorites(existing => [...existing, place])
    }

    function removeFavorite(id) {
        setFavorites(favorites.filter(favorite => favorite.id !== id));
    }

    function isFvorite(id) {
        return favorites.some(favorite => favorite.id === id)
    }

    return <FavoriteContext.Provider value={context}>{children}</FavoriteContext.Provider>;
}

export default FavoriteContext