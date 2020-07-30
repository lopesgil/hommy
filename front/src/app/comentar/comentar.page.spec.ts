import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentarPage } from './comentar.page';

describe('ComentarPage', () => {
  let component: ComentarPage;
  let fixture: ComponentFixture<ComentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
