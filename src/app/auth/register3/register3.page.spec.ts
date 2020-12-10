import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { register3Page } from './register3.page';

describe('register3Page', () => {
  let component: register3Page;
  let fixture: ComponentFixture<register3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ register3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(register3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
