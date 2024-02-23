import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBarraComponent } from './chat-barra.component';

describe('ChatBarraComponent', () => {
  let component: ChatBarraComponent;
  let fixture: ComponentFixture<ChatBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBarraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
