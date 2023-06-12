import { DEFAULT_CONTENT, DEFAULT_STYLES } from './flex-item.constants';
import { FlexItemProps, FlexItemStyles } from './flex-item.interface';

const defaults: FlexItemProps = {
  content: DEFAULT_CONTENT,
  style: DEFAULT_STYLES,
};

export class FlexItem implements FlexItemProps {
  content: string;
  style: FlexItemStyles;

  constructor({ content, style }: FlexItemProps = defaults) {
    this.content = content;
    this.style = style;
  }
}
