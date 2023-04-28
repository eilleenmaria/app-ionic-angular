import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeportivoPage } from './deportivo.page';

describe('DeportivoPage', () => {
  let component: DeportivoPage;
  let fixture: ComponentFixture<DeportivoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeportivoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
