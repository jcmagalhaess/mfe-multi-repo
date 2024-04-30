import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIndexComponent } from './counter-index.component';

describe('CounterIndexComponent', () => {
  let component: CounterIndexComponent;
  let fixture: ComponentFixture<CounterIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
