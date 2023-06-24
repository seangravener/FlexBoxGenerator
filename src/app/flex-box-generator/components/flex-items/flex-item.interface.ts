import { CommonStylesKeys } from "../../shared/interfaces/common-styles.interface";

export interface FlexItemStyleProps extends CommonStylesKeys {
  order?: string;
  flexGrow?: string;
  flexBasis?: string;
  alignSelf?: string;
  flexShrink?: string;
}

export type FlexItemStyle = {
  [property in keyof FlexItemStyleProps]: string | undefined;
};

export interface FlexItemProps {
  content: string;
  style: FlexItemStyle;
}
