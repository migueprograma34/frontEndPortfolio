import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPagComponent } from './logo-pag.component';

describe('LogoPagComponent', () => {
  let component: LogoPagComponent;
  let fixture: ComponentFixture<LogoPagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoPagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoPagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
