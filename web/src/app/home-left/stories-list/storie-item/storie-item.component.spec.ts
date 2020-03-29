import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorieItemComponent } from './storie-item.component';

describe('StorieItemComponent', () => {
  let component: StorieItemComponent;
  let fixture: ComponentFixture<StorieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
