export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexJustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type FlexAlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexAlignContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
export type FlexAlignSelf = 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexJustifyItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
export type FlexDisplay = 'flex' | 'inline-flex' | 'block' | 'inline-block' | 'none';

export interface FlexContainer {
  alignItems: FlexAlignContent;
  alignContent: FlexAlignContent;
  display: FlexDisplay;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  justifyContent: FlexJustifyContent;
}

export interface FlexItem {
  alignSelf: string;
  order: string;
}
