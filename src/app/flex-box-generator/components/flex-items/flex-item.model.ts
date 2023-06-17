import { DEFAULT_FLEX_ITEM } from './flex-item.constants';
import { FlexItemProps, FlexItemStyles } from './flex-item.interface';

export class FlexItem implements FlexItemProps {
  content: string;
  style: FlexItemStyles;

  get styleProperties(): string[] {
    return Object.keys(this.style)
  }

  constructor({ content, style }: FlexItemProps = DEFAULT_FLEX_ITEM) {
    this.content = content;
    this.style = style;
  }
}
