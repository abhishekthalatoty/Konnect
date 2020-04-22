import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEntryFieldComponent } from './message-entry-field.component';

describe('MessageEntryFieldComponent', () => {
  let component: MessageEntryFieldComponent;
  let fixture: ComponentFixture<MessageEntryFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEntryFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEntryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
