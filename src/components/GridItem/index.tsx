import { GridItemType } from "../../types/GridItemType";
import * as C from "./styles";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export default function GridItem({ item, onClick }: Props) {
  return (
    <C.Container onClick={onClick}>
      <div>...</div>
      <div></div>
    </C.Container>
  );
}
