import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOldComponent } from './test-old.component';

describe('TestOldComponent', () => {
  let component: TestOldComponent;
  let fixture: ComponentFixture<TestOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestOldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
