import { DEFAULT_FLEX_ITEM } from './flex-item.constants';
import {
  FlexItemProps,
  FlexItemStyle,
  FlexItemStyleProps,
} from './flex-item.interface';

export class FlexItem implements FlexItemProps {
  content: string;
  style: FlexItemStyle;

  get styleProperties(): { key: string; value: string | undefined }[] {
    return Object.keys(this.style).map((key) => {
      const value = this.getStyle(key);

      return { key, value: value ? (value as string) : '' };
    });
  }

  get styles(): FlexItemStyle {
    return this.style;
  }

  constructor({ content, style }: FlexItemProps = DEFAULT_FLEX_ITEM) {
    this.content = content;
    this.style = style;
  }

  getStyle(key: string): string {
    const value = this.style[key as keyof FlexItemStyle];
    return value ? (value as string) : '';
  }
}
