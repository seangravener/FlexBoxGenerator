import { genDefaultFlexItem } from './flex-item.generator'
import { FlexItemStyle } from './flex-item.interface'
import { FlexItem } from './flex-item.model'

const defaultFlexItemStyle: FlexItemStyle = {
  backgroundColor: 'rgba(255, 255, 255, .01)',
  color: 'white',
}

const defaultFlexItemContent = '👋'

export const DEFAULT_FLEX_ITEM = genDefaultFlexItem(
  defaultFlexItemContent,
  defaultFlexItemStyle,
)

export const DEFAULT_FLEX_ITEMS: FlexItem[] = [
  DEFAULT_FLEX_ITEM,
  DEFAULT_FLEX_ITEM,
  DEFAULT_FLEX_ITEM,
]

export const DEFAULT_STYLES: FlexItemStyle = { ...DEFAULT_FLEX_ITEM.style }
