// prettier-ignore
export const flexContainerStyleOptions = {
  display: ['flex', 'inline-flex', 'block', 'inline-block', 'none'] as string[],
  flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'] as string[],
  flexWrap: ['nowrap', 'wrap', 'wrap-reverse'] as string[],
  justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'] as string[],
  alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as string[],
  alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'] as string[],
  alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as string[],
  justifyItems: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'] as string[],
  background: ['transparent', 'black', 'white'] as string[],
  height: ['300px', '600px', '900px', '100vh'] as string[],
} as const

type FlexContainerStyleOptions<
  T extends keyof typeof flexContainerStyleOptions,
> = (typeof flexContainerStyleOptions)[T][number]

export type FlexDisplay = FlexContainerStyleOptions<'display'>
export type FlexDirection = FlexContainerStyleOptions<'flexDirection'>
export type FlexWrap = FlexContainerStyleOptions<'flexWrap'>
export type FlexJustifyContent = FlexContainerStyleOptions<'justifyContent'>
export type FlexAlignItems = FlexContainerStyleOptions<'alignItems'>
export type FlexAlignContent = FlexContainerStyleOptions<'alignContent'>
export type FlexAlignSelf = FlexContainerStyleOptions<'alignSelf'>
export type FlexJustifyItems = FlexContainerStyleOptions<'justifyItems'>
