import { Component, Input, OnInit } from '@angular/core';
import { Sku } from 'src/app/model/sku.model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent {
  @Input() number: number | undefined;
  @Input() skuGroups: Sku[][] = [];
}
