import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonComponent } from './mason.component';

describe('MasonComponent', () => {
  let component: MasonComponent;
  let fixture: ComponentFixture<MasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
