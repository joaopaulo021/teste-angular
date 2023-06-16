import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  nome: string = '';
  valor: number = 0;
  parcelas: number = 0;

  @Output() onSubmit = new EventEmitter<{
    nome: string;
    valor: number;
    parcelas: number;
  }>();

  handleSubmit(event: Event) {
    event.preventDefault();
    this.onSubmit.emit({
      nome: this.nome,
      valor: this.valor,
      parcelas: this.parcelas,
    });
    this.nome = '';
    this.valor = 0;
    this.parcelas = 0;
  }
}
