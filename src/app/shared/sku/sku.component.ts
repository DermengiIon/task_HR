import { Component, Input, OnInit } from '@angular/core';
import { Sku } from 'src/app/model/sku.model';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})
export class SkuComponent {
  @Input() sku: Sku | undefined;
  @Input() statusColor: string | undefined;
}
