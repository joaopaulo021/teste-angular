import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <div *ngIf="showPopup" class="popup-container">
      <div class="popup-content">
        <h2>Confirmar o empréstimo?</h2>

        <app-data-parcela
          [valorParcelas]="valorParcelas"
          [numeroParcelas]="numeroParcelas"
          [totalComJuros]="totalComJuros"
          [formatoReal]="formatoReal"
        ></app-data-parcela>

        <button class="popup-button verde" (click)="confirmPopup()">
          Confirmar
        </button>
        <button class="popup-button vermelho" (click)="cancelPopup()">
          Cancelar
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() valorParcelas: number = 0;
  @Input() numeroParcelas: number = 0;
  @Input() totalComJuros: number = 0;
  @Input() formatoReal: (valor: number) => string = (valor) => '';

  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() onFormConfirmed: EventEmitter<void> = new EventEmitter<void>();

  @Input() showPopup: boolean = false;
  showConfirmationPage: boolean = false;

  confirmPopup() {
    this.onFormConfirmed.emit();
    this.showPopup = false;
    this.showConfirmationPage = true;
    this.onConfirm.emit();
  }

  cancelPopup() {
    this.onCancel.emit();
  }
}
