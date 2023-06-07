import {
  FlexAlignContent,
  FlexDirection,
  FlexDisplay,
  FlexJustifyContent,
  FlexWrap,
} from '../../core/interfaces/flex-styles.interface';

export interface FlexContainerProps {
  alignItems?: FlexAlignContent;
  alignContent?: FlexAlignContent;
  display?: FlexDisplay;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: FlexJustifyContent;
}
