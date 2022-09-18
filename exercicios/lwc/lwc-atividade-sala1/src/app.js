import { LightningElement } from "lwc";

export default class App extends LightningElement {
  visivel = false;

  empresa = "Empresa Show";
	cnpj = "00001111000-11";
	endereco = "Rua dos Bobos, 0";
  produto = "Produto Show";
	descricao =  "Descrição super hiper show";
	preco =  200.00;	
 	oferta1 = 50;
	oferta2 = 70;

  onClick(){
      this.visivel = true;
    }
}
