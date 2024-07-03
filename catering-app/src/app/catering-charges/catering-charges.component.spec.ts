import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CateringChargesComponent } from './catering-charges.component';




describe('CateringChargesComponent', () => {
  let component: CateringChargesComponent;
  let fixture: ComponentFixture<CateringChargesComponent>;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateringChargesComponent]
    })
    .compileComponents();




    fixture = TestBed.createComponent(CateringChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
