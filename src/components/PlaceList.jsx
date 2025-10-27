import { useLoaderData } from "react-router-dom"

import Card from "./Card"

import styles from "./PlaceList.module.css"

export default function PlaceList() {
    const list = useLoaderData()

    return (<div className={styles.container}>
        {
            list.map(place => {
                return (
                    <Card
                        key={place.id}
                        img={place.id}
                        title={place.author}
                        desc={place.body}
                    />
                )
            })
        }
    </div>
        
    )
}