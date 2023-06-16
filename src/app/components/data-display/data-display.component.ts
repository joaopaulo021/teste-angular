import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-data-display',
  template: `
    <div class="wrapper">
      <div class="container" *ngIf="!showConfirmationPage">
        <h2>Confira os dados:</h2>
        <div class="data-container">
          <app-data-parcela
            [formatoReal]="formatoReal"
            [valorParcelas]="valorParcelas"
            [numeroParcelas]="numeroParcelas"
            [totalComJuros]="totalComJuros"
          ></app-data-parcela>
          <button (click)="openPopup()">Confirmar</button>
        </div>
      </div>
    </div>
    <app-popup
      *ngIf="showPopup"
      [valorParcelas]="valorParcelas"
      [numeroParcelas]="numeroParcelas"
      [totalComJuros]="totalComJuros"
      [formatoReal]="formatoReal"
      (onCancel)="closePopup()"
      (onConfirm)="confirmPopup()"
      [showPopup]="showPopup"
    >
    </app-popup>
    <app-confirmation-page
      *ngIf="showConfirmationPage"
      [valorParcelas]="valorParcelas"
      [numeroParcelas]="numeroParcelas"
      [totalComJuros]="totalComJuros"
      [formatoReal]="formatoReal"
    ></app-confirmation-page>
  `,
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent {
  @Input() valorParcelas: number = 0;
  @Input() numeroParcelas: number = 0;
  @Input() totalComJuros: number = 0;
  @Input() formatoReal: (valor: number) => string = (valor) => '';

  showPopup: boolean = false;
  showConfirmationPage: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  confirmPopup() {
    this.showConfirmationPage = true;
  }
}
