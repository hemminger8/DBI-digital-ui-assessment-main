import { Color } from "./color";

export interface Product {
  id: number,
  brand: string,
  name: string,
  price: number,
  compValue: any,
  rating: any,
  activeColor: number,
  colors: Color[]
}
