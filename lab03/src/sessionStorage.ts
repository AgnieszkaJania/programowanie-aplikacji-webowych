import Field from '../tictactoe/Field';
import MoveType from '../tictactoe/MoveType';

export  class SessionStorageGame{

    movesArray = [];
    

    public AddMove(field: Field): void{
        let movesValue = <string>sessionStorage.getItem('moves');
        let moves : Field[];
        moves= <Field[]>JSON.parse(movesValue);
        if(!moves){
            moves = [];
        }
        moves.push(field);
        sessionStorage.setItem('moves', JSON.stringify(moves));
        
    }

    public UndoMove=(fields: Field[]):boolean =>{
        let movesValue = <string>sessionStorage.getItem('moves');
        let movesArr : Field[];
        movesArr = <Field[]>JSON.parse(movesValue);
        if(!movesArr || movesArr.length === 0){
            alert('Nie można cofnąć gry');
            return false;
            
        }else{
            let lastMove = movesArr.pop();
            console.log(lastMove);
            let field = fields.find( a => a.row === lastMove.row && a.column === lastMove.column);
            sessionStorage.setItem('moves', JSON.stringify(movesArr));
            if(field){
                field.MakeMove(MoveType.empty);
                return true;
            }
            return false;
           
        }
        
    }
}