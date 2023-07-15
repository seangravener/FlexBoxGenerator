import { FlexItemStyle } from './flex-item.interface';
import { FlexItem } from './flex-item.model';

export const genDefaultFlexItem = (
  content: string,
  style: FlexItemStyle
): FlexItem => {
  return {
    content,
    style,
  } as FlexItem;
};
