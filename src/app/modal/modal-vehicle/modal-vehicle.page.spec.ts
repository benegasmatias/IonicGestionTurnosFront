import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalVehiclePage } from './modal-vehicle.page';

describe('ModalVehiclePage', () => {
  let component: ModalVehiclePage;
  let fixture: ComponentFixture<ModalVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
