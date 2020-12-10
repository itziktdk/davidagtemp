import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { register2Page } from './register2.page';
describe('register2Page', () => {
  let component: register2Page;
  let fixture: ComponentFixture<register2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ register2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(register2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
