import { DEFAULT_FLEX_ITEM } from './flex-item.constants';
import { FlexItemProps, FlexItemStyles } from './flex-item.interface';

export class FlexItem implements FlexItemProps {
  content: string;
  style: FlexItemStyles;

  get styleProperties(): { key: string; value: string | undefined }[] {
    return Object.keys(this.style).map((key) => {
      const value = this.getStyle(key);

      return { key, value: value ? (value as string) : '' };
    });
  }

  get styles(): FlexItemStyles {
    return this.style;
  }

  constructor({ content, style }: FlexItemProps = DEFAULT_FLEX_ITEM) {
    this.content = content;
    this.style = style;
  }

  getStyle(key: string): string {
    const value = this.style[key];
    return value ? (value as string) : '';
  }
}
