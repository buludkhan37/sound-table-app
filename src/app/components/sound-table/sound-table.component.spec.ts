import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundTableComponent } from './sound-table.component';

describe('SoundTableComponent', () => {
  let component: SoundTableComponent;
  let fixture: ComponentFixture<SoundTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoundTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
