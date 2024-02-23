import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Chart, ChartData, Point } from 'chart.js';

@Component({
  selector: 'app-chat-barra',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './chat-barra.component.html',
  styleUrl: './chat-barra.component.scss',
})
export class ChatBarraComponent {
  public myChart: Chart | undefined;

  constructor() {}

  ngOnInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const data = {};
    const chart = new Chart(ctx, {
      type: 'line',
      data: data as ChartData<'line', (number | Point | null)[], unknown>,
      options: {
        onClick: (e) => {
          //const canvasPosition = getRelativePosition(e, chart);
          // Substitute the appropriate scale IDs
          //const dataX = chart.scales['x'].getValueForPixel(canvasPosition.x);
          //const dataY = chart.scales['y'].getValueForPixel(canvasPosition.y);
        },
      },
    });
    this.myChart;
  }
}
