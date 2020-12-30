import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyOrderPage } from './varify-order.page';

describe('VerifyOrderPage', () => {
  let component: VerifyOrderPage;
  let fixture: ComponentFixture<VerifyOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
