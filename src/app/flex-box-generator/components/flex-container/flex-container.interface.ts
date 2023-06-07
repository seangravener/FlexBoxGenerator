import {
  FlexAlignContent,
  FlexDirection,
  FlexDisplay,
  FlexJustifyContent,
  FlexWrap,
} from '../../shared/interfaces/flex-styles.interface';

export interface FlexContainerProps {
  alignItems?: FlexAlignContent;
  alignContent?: FlexAlignContent;
  display?: FlexDisplay;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: FlexJustifyContent;
}
