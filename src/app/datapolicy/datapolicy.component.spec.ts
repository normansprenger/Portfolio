import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapolicyComponent } from './datapolicy.component';

describe('DatapolicyComponent', () => {
  let component: DatapolicyComponent;
  let fixture: ComponentFixture<DatapolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatapolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatapolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
