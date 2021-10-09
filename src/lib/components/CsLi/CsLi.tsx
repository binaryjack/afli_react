
import { FC } from "react";

type CsLiProps = {
  item: number
}
export const CsLi: FC<CsLiProps> = ({ item }) => {
  return <li>{item}</li>;
}
