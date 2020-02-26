import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresupuestoFormPage } from './presupuesto-form.page';

describe('PresupuestoFormPage', () => {
  let component: PresupuestoFormPage;
  let fixture: ComponentFixture<PresupuestoFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresupuestoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresupuestoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
