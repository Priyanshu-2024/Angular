import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycompComponent } from './dummycomp.component';

describe('DummycompComponent', () => {
  let component: DummycompComponent;
  let fixture: ComponentFixture<DummycompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummycompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
