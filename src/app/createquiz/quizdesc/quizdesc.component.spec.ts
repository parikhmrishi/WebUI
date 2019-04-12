import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizdescComponent } from './quizdesc.component';

describe('QuizdescComponent', () => {
  let component: QuizdescComponent;
  let fixture: ComponentFixture<QuizdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
