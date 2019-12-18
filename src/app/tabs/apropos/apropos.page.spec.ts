import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AproposPage } from './apropos.page';

describe('AproposPage', () => {
  let component: AproposPage;
  let fixture: ComponentFixture<AproposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AproposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
