import { FlexContainerStyleProps } from "./flex-container.interface";

export const CONTAINER = {
  alignContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
};

export const DEFAULT_FLEX_CONTAINER = {
  content: 'hi',
  style: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' } as FlexContainerStyleProps,
};

