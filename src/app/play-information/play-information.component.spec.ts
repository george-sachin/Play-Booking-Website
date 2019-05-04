import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayInformationComponent } from './play-information.component';

describe('PlayInformationComponent', () => {
  let component: PlayInformationComponent;
  let fixture: ComponentFixture<PlayInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
