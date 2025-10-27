import { useContext } from "react"

import PlaceList from "../components/PlaceList"
import FavoriteContext from "../context/favorite-context"

export default function Favorite() {
    const ctx = useContext(FavoriteContext);

    return <PlaceList list={ctx.favorites} />;
}