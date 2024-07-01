import styles from "../../styles/CarsPage.module.scss"
import Card from "../modules/Card"

function CarsPage({carsData}) {
  return (
    <div className={styles.container}>
        {carsData.map((car) => (
        <Card key={car.id} {... car} />
      ))}
    </div>
  )
}

export default CarsPage
