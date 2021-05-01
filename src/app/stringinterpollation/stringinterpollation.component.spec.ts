import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterpollationComponent } from './stringinterpollation.component';

describe('StringinterpollationComponent', () => {
  let component: StringinterpollationComponent;
  let fixture: ComponentFixture<StringinterpollationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringinterpollationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringinterpollationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
