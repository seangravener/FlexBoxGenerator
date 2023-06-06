import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-items-options',
  templateUrl: './children-options.component.html',
  styleUrls: ['./children-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsOptionsComponent {

}
