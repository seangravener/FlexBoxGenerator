export type CommonStylesKeys = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  background?: string;
  color?: string;
};

export interface FlexContainerStyleProps extends CommonStylesKeys {
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
}

export interface FlexItemStyleProps extends CommonStylesKeys {
  order?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  alignSelf?: string;
}

export type FlexItemStyle = {
  [property in keyof FlexItemStyleProps]: string | undefined;
};

export interface FlexItemProps {
  content: string;
  style: FlexItemStyle;
}
