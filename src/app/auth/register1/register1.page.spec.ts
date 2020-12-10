import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { register1Page } from './register1.page';

describe('register1Page', () => {
  let component: register1Page;
  let fixture: ComponentFixture<register1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ register1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(register1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
