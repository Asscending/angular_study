import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverOneComponent } from './receiver-one.component';

describe('ReceiverOneComponent', () => {
  let component: ReceiverOneComponent;
  let fixture: ComponentFixture<ReceiverOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
