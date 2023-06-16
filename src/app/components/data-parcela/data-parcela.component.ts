import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-parcela',
  template: `
    <div class="container">
      <span>
        Valor das parcelas:
        <span class="text">{{ formatoReal(valorParcelas) }}</span>
      </span>

      <span>
        Quantidade de parcelas:
        <span class="text">{{ numeroParcelas }}x</span>
      </span>

      <span>
        Valor total com 5% de juros:
        <span class="text">{{ formatoReal(totalComJuros) }}</span>
      </span>
    </div>
  `,
  styleUrls: ['./data-parcela.component.scss'],
})
export class DataParcelaComponent {
  @Input() valorParcelas: number = 0;
  @Input() numeroParcelas: number = 0;
  @Input() totalComJuros: number = 0;
  @Input() formatoReal: (valor: number) => string = (valor) => '';
}
