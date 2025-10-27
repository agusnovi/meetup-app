import Card from "./Card"

import styles from "./PlaceList.module.css"

export default function PlaceList({list}) {
    return (<div className={styles.container}>
        {
            list.map(place => {
                return (
                    <Card
                        key={place.id}
                        id={place.id}
                        title={place.author}
                        desc={place.body}
                    />
                )
            })
        }
    </div>
        
    )
}