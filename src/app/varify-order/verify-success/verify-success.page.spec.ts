import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifySuccessPage } from './verify-success.page';

describe('VerifySuccessPage', () => {
  let component: VerifySuccessPage;
  let fixture: ComponentFixture<VerifySuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifySuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifySuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
