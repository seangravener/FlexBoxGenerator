import { CommonStylesKeys } from '../../shared/interfaces/common-styles.interface'
import {
  FlexAlignContent,
  FlexDirection,
  FlexDisplay,
  FlexJustifyContent,
  FlexWrap,
} from '../../shared/interfaces/flex-styles.interface'

export interface FlexContainerProps {
  content?: string
  style?: FlexContainerStyleProps
}

export interface FlexContainerStyleProps extends CommonStylesKeys {
  display?: FlexDisplay
  flexWrap?: FlexWrap
  flexDirection?: FlexDirection
  alignItems?: FlexAlignContent
  alignContent?: FlexAlignContent
  justifyContent?: FlexJustifyContent
  background?: string
  height?: string
}

export type FlexContainerStyle = {
  [property in keyof FlexContainerProps]: string | undefined
}
