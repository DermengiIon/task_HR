import { Component, Input, OnInit } from '@angular/core';
import { Sku } from 'src/app/model/sku.model';

@Component({
  selector: 'app-sku-group',
  templateUrl: './sku-group.component.html',
  styleUrls: ['./sku-group.component.scss']
})
export class SkuGroupComponent {
  @Input() skuGroup: Sku[] = [];

  getStatusColor() {
    if (this.skuGroup.every(sku => sku.status === 'open')) {
      return '#f4e700';
    }

    if (this.skuGroup.every(sku => sku.status === 'closed')) {
      return '#f64d25';
    } else {
      return '#f89505';
    }
  }
}
