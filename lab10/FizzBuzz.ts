export class FizzBuzz{
    Play(): string[]{
        let gameBoard: string[] = [];
        for(let i = 1; i <= 100; i++){
           gameBoard.push(this.Check(i));
        }
       return gameBoard;
       
        
    }
    Check(x:number):string{
        if(x % 3 == 0 && x % 5 != 0){
            return 'Fizz';
        }
        if(x % 5 == 0 && x % 3 != 0){
            return 'Buzz';
        }
        if(x % 3 == 0 && x % 5 == 0){
            return 'Fizz Buzz';

        }
        return x.toString();
    }
}