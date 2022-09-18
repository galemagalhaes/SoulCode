import { LightningElement } from "lwc";

export default class App extends LightningElement {
  visivel = false;
  
  onClick(){
      this.visivel = !this.visivel;
    }
}
