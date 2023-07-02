export const flexContainerStyleOptions = {
  display: ['flex', 'inline-flex', 'block', 'inline-block', 'none'] as string[],
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'] as string[],
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'] as string[],
  justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] as string[],
  alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as string[],
  alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'] as string[],
  alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as string[],
  justifyItems: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as string[],
} as const

export type FlexDisplay = (typeof flexContainerStyleOptions.display)[number]
export type FlexDirection = (typeof flexContainerStyleOptions.flexDirection)[number]
export type FlexWrap = (typeof flexContainerStyleOptions.flexWrap)[number]
export type FlexJustifyContent = (typeof flexContainerStyleOptions.justifyContent)[number]
export type FlexAlignItems = (typeof flexContainerStyleOptions.alignItems)[number]
export type FlexAlignContent = (typeof flexContainerStyleOptions.alignContent)[number]
export type FlexAlignSelf = (typeof flexContainerStyleOptions.alignSelf)[number]
export type FlexJustifyItems = (typeof flexContainerStyleOptions.justifyItems)[number]
