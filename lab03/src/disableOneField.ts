import { TicTacToe } from "../tictactoe/tictactoe";


function disableOneField(
    target: TicTacToe,
    propKey: string,
    descriptor: PropertyDescriptor
  ): any {
    const originalFn = descriptor.value;
    descriptor.value = function (size:number, winLenght:number, comm:boolean) {
      if(size <= 1){
        return document.createElement('div');
      }
      else{
        return originalFn.apply(this, [size, winLenght, comm]);
      }
      
    };
  }
  
  export default disableOneField;