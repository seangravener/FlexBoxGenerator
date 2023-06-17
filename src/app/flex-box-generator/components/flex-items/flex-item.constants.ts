import { FlexItem } from './flex-item.model';

export const FLEX_ITEM_STYLE = { backgroundColor: 'red', alignSelf: 'auto' };
export const FLEX_ITEM = { content: 'Item', style: FLEX_ITEM_STYLE };

export const DEFAULT_STYLES = { ...FLEX_ITEM.style };
export const DEFAULT_CONTENT = FLEX_ITEM.content;

export const DEFAULT_FLEX_ITEM: FlexItem = {
  content: DEFAULT_CONTENT,
  style: DEFAULT_STYLES
} as FlexItem;

export const DEFAULT_FLEX_ITEMS: FlexItem[] = [
  DEFAULT_FLEX_ITEM,
  DEFAULT_FLEX_ITEM,
  DEFAULT_FLEX_ITEM
];
