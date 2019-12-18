import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReseauPage } from './reseau.page';

describe('ReseauPage', () => {
  let component: ReseauPage;
  let fixture: ComponentFixture<ReseauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReseauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReseauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
