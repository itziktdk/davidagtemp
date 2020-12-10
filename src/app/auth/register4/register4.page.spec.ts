import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { register4Page } from './register4.page';

describe('register4Page', () => {
  let component: register4Page;
  let fixture: ComponentFixture<register4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ register4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(register4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
