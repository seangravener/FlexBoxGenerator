import { DEFAULT_FLEX_CONTAINER } from './flex-container.constants';
import {
  FlexContainerProps,
  FlexContainerStyleProps,
} from './flex-container.interface';

export class FlexContainer implements FlexContainerProps {
  content: string | undefined;
  style: FlexContainerStyleProps | undefined;

  constructor({ content, style }: FlexContainerProps = DEFAULT_FLEX_CONTAINER) {
    this.content = content;
    this.style = style;
  }
}
