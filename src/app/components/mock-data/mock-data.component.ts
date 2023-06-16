import { Component } from '@angular/core';
import { ConfirmationPageComponent } from '../confirmation-page/confirmation-page.component';

@Component({
  selector: 'app-mock-data',
  template: `
    <app-form (onSubmit)="simulateRequest($event)"></app-form>
    <app-data-display
      *ngIf="displayData"
      [valorParcelas]="valorParcelas"
      [numeroParcelas]="numeroParcelas"
      [totalComJuros]="totalComJuros"
      [formatoReal]="formatoReal"
      (onFormConfirmed)="showPopup = true"
    ></app-data-display>
  `,
})
export class MockDataComponent {
  valorParcelas: number = 0;
  numeroParcelas: number = 0;
  totalComJuros: number = 0;
  displayData: boolean = false;
  showPopup: boolean = false;
  showConfirmationPage: boolean = false;

  formatoReal = (valor: number): string => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  simulateRequest(formData: { nome: string; valor: number; parcelas: number }) {
    const juros = formData.valor * 0.05; // Juros de 5%
    const totalComJuros = formData.valor + juros;
    const valorParcelas = totalComJuros / formData.parcelas;

    setTimeout(() => {
      this.valorParcelas = valorParcelas;
      this.numeroParcelas = formData.parcelas;
      this.totalComJuros = totalComJuros;
      this.displayData = true;
    }, 1000);
  }

  confirmPopup() {
    this.showConfirmationPage = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
