import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarDetail() {
  const router = useRouter();
  const { CarId } = router.query;
  const carDerails = carsData[CarId - 1]
  console.log(carDerails)
  return <div></div>;
}

export default CarDetail;
