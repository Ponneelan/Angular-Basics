import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileToParentComponent } from './chile-to-parent.component';

describe('ChileToParentComponent', () => {
  let component: ChileToParentComponent;
  let fixture: ComponentFixture<ChileToParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChileToParentComponent]
    });
    fixture = TestBed.createComponent(ChileToParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
