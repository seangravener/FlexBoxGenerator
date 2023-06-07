import { DEFAULT_CONTENT, DEFAULT_STYLES } from './flex-item.constants';
import { FlexItemProps, FlexItemStyles } from './flex-item.interface';

export class FlexItem implements FlexItemProps {
  content: string;
  style: FlexItemStyles;

  constructor(
    content: string = DEFAULT_CONTENT,
    style: FlexItemStyles = DEFAULT_STYLES
  ) {
    this.content = content;
    this.style = style;
  }
}
