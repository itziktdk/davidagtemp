import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { register5Page } from './register5.page';

describe('register5Page', () => {
  let component: register5Page;
  let fixture: ComponentFixture<register5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ register5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(register5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
