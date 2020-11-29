import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorSearchFormPage } from './doctor-search-form.page';

describe('DoctorSearchFormPage', () => {
  let component: DoctorSearchFormPage;
  let fixture: ComponentFixture<DoctorSearchFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSearchFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorSearchFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
