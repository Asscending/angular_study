import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverTwoComponent } from './receiver-two.component';

describe('ReceiverTwoComponent', () => {
  let component: ReceiverTwoComponent;
  let fixture: ComponentFixture<ReceiverTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
