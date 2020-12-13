import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Regform3Page } from './regform3.page';

describe('Regform3Page', () => {
  let component: Regform3Page;
  let fixture: ComponentFixture<Regform3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Regform3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Regform3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
