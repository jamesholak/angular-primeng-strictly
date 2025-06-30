import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent3rdLevelComponent } from './sub-component3rd-level.component';

describe('SubComponent3rdLevelComponent', () => {
  let component: SubComponent3rdLevelComponent;
  let fixture: ComponentFixture<SubComponent3rdLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubComponent3rdLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubComponent3rdLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
