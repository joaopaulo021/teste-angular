import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataParcelaComponent } from './data-parcela.component';

describe('DataParcelaComponent', () => {
  let component: DataParcelaComponent;
  let fixture: ComponentFixture<DataParcelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataParcelaComponent]
    });
    fixture = TestBed.createComponent(DataParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
