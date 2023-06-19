export type FlexContainerStylesKeys = 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'alignContent';

export type FlexItemStylesKeys = 'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'alignSelf';

export interface FlexItemStyles {
  [styleProp: string]: string | undefined;
}

export interface FlexItemProps {
  content: string;
  style: FlexItemStyles;
}
