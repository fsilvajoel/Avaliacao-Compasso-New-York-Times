import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListScienceComponent } from './list-science.component';

describe('ListScienceComponent', () => {
  let component: ListScienceComponent;
  let fixture: ComponentFixture<ListScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
