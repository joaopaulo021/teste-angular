import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-page',
  template: `
    <div class="wrapper">
      <div class="container">
        <h2>O empréstimo foi realizado com sucesso!</h2>
        <app-data-parcela
          [formatoReal]="formatoReal"
          [valorParcelas]="valorParcelas"
          [numeroParcelas]="numeroParcelas"
          [totalComJuros]="totalComJuros"
        ></app-data-parcela>
        <button (click)="goBack()">Voltar</button>
      </div>
    </div>
  `,
  styleUrls: ['./confirmation-page.component.scss'],
})
export class ConfirmationPageComponent {
  @Input() valorParcelas: number = 0;
  @Input() numeroParcelas: number = 0;
  @Input() totalComJuros: number = 0;
  @Input() formatoReal: (valor: number) => string = (valor) => '';

  goBack() {
    window.location.reload(); // Navega de volta à página anterior
  }
}
