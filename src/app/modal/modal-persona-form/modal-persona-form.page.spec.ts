import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPersonaFormPage } from './modal-persona-form.page';

describe('ModalPersonaFormPage', () => {
  let component: ModalPersonaFormPage;
  let fixture: ComponentFixture<ModalPersonaFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPersonaFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPersonaFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
