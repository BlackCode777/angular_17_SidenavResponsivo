import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesJavaScriptTypeScriptComponent } from './testes-javascripttypescript.component';

describe('TestesJavaScriptTypeScriptComponent', () => {
  let component: TestesJavaScriptTypeScriptComponent;
  let fixture: ComponentFixture<TestesJavaScriptTypeScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestesJavaScriptTypeScriptComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestesJavaScriptTypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
