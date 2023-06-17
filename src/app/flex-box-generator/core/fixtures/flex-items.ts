import { FLEX_ITEM } from "../../components/flex-items/flex-item.constants";
import { FlexItem } from "../../components/flex-items/flex-item.model";
import { Slice } from "../services/store.provider";

export const FLEX_ITEMS_SLICE: Slice<FlexItem[]> = {
  flexItems: [FLEX_ITEM, FLEX_ITEM, FLEX_ITEM],
};
