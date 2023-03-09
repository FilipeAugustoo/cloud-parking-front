import { Car } from "./Car"

export type Parking = {
  cars: Car[],
  name: String,
  number_VACANCIES: number,
  occupied_VACANCIES: number
}