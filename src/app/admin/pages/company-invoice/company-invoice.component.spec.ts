import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInvoiceComponent } from './company-invoice.component';

describe('CompanyInvoiceComponent', () => {
  let component: CompanyInvoiceComponent;
  let fixture: ComponentFixture<CompanyInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
