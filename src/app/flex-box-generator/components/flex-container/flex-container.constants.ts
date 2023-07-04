import { FlexContainerStyleProps } from './flex-container.interface'

export const CONTAINER = {
  alignContent: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  background: 'transparent',
  height: '300px',
} as FlexContainerStyleProps

export const DEFAULT_FLEX_CONTAINER = {
  content: 'hello-world',
  style: { ...CONTAINER },
}
