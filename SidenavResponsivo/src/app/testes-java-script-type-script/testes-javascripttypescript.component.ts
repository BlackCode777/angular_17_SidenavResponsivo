import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-TestesJavascriptTypescript',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './testes-javascripttypescript.component.html',
  styleUrl: './testes-javascripttypescript.component.scss',
})
export class TestesJavaScriptTypeScriptComponent {
  constructor() {}

  ngOnInit() {}
}
