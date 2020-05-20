import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor: string = "0"
  valor2: number = +this.valor
  memoria: number = 0
  operacao: string = ""
  ponto: string = ""
  zero: string = ""
  res = false


  //Função para tratar números
  constructor() {}

  clickBotao(parametro: string){
    if (this.res == true) {
      this.valor = ""
      this.valor2 = +this.valor
      this.res = false
    }
    this.valor = String("" + this.valor + this.ponto + parametro)
    this.ponto = ""
    this.valor2 = +this.valor
    }

  clickOutros(parametro: string){
    if (parametro == "+/-"){
      this.valor2 = (this.valor2 * -1)
      this.valor = String(Number(this.valor2))
    } else if (parametro == ","){
      if (!(String(this.valor).indexOf(".")>0)){
        this.ponto = "."
      }
    } else if (parametro == "C"){
      this.valor = "0"
      this.valor2 = +this.valor
      this.memoria = 0
      this.operacao = ""
      this.ponto = ""  
    }
  }

  calcula(tipo: string){
    if (this.operacao == ""){
      this.memoria = this.valor2
    } else if (this.operacao == "+"){
      this.memoria = this.memoria + this.valor2
    } else if (this.operacao == "-"){
      this.memoria = this.memoria - this.valor2
    } else if (this.operacao == "x"){
      this.memoria = this.memoria * this.valor2
    } else if (this.operacao == "/"){
      this.memoria = this.memoria / this.valor2
    }
    this.operacao = tipo
    this.valor = "0"
    this.valor2 = +this.valor
  }

  igual(){
    this.calcula(this.operacao)
    this.valor2 = this.memoria
    this.valor = String(Number(this.valor2))
    this.memoria = 0
    this.operacao = ""
    this.res = true
  }
}
