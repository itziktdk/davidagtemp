import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { homeloginPage } from './homelogin.page';

describe('homeloginPage', () => {
  let component: homeloginPage;
  let fixture: ComponentFixture<homeloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ homeloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(homeloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
