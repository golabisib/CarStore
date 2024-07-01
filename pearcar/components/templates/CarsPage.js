import styles from "../../styles/CarsPage.module.scss"

function CarsPage({carsData}) {
  return (
    <div className={styles.container}>
        {carsData.map((car) => (
        <p key={car.id} className={styles.item}>{car.name}</p>
      ))}
    </div>
  )
}

export default CarsPage
