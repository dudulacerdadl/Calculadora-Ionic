import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  res = false
  valor: number = 0
  memoria: number = 0
  operacao: string = ""
  ponto: string= ""


  //Função para tratar números
  constructor() {}

  clickBotao(parametro: string){
    if (this.res = true){
      this.valor = Number("" + this.ponto + parametro)
      this.ponto = "" 
      this.res = false
    } else
    this.valor = Number("" + this.valor + this.ponto + parametro)
    this.ponto = "" 
  }

  clickOutros(parametro: string){
    if (parametro == "+/-"){
      this.valor = (this.valor * -1)
    } else if (parametro == ","){
      if (!(String(this.valor).indexOf(".")>0)){
        this.ponto = "."
      }
    } else if (parametro == "C"){
      this.valor = 0
      this.memoria = 0
      this.operacao = ""
      this.ponto = ""  
    }
  }

  calcula(tipo: string){
    if (this.operacao == ""){
      this.memoria = this.valor
    } else if (this.operacao == "+"){
      this.memoria = this.memoria + this.valor
    } else if (this.operacao == "-"){
      this.memoria = this.memoria - this.valor
    } else if (this.operacao == "x"){
      this.memoria = this.memoria * this.valor
    } else if (this.operacao == "/"){
      this.memoria = this.memoria / this.valor
    }
    this.operacao = tipo
    this.valor = 0
  }

  igual(){
    this.res = true
    this.calcula(this.operacao)
    this.valor = this.memoria
    this.memoria = 0
    this.operacao = ""
  }
}
