import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuGroupComponent } from './sku-group.component';

describe('SkuGroupComponent', () => {
  let component: SkuGroupComponent;
  let fixture: ComponentFixture<SkuGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
