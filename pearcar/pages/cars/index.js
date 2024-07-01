import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";

function Details() {
  return (
    <div>
      <CarsPage carsData={carsData} />
    </div>
  );
}

export default Details;