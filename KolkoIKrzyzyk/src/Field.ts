import  MoveType  from "./MoveType";

class Field{
    element: HTMLElement;
    row: number;
    column: number;

    constructor(row:number, column:number){
        this.row = row;
        this.column = column;
        this.element = document.createElement('div');
        this.element.classList.add('Field');
        this.element.id = `FIELD${row}_${column}`;

        if((row + column) % 2 == 0){
            this.element.style.backgroundColor = 'pink';

        }else{
            this.element.style.backgroundColor = 'aqua';
        }
        
    }
    Equal(id: string){
        return id === this.element.id;
    }

    State() : MoveType{
        switch(this.element.innerText){
            case "O":
                return MoveType.circle;
            case "X":
                return MoveType.cross;
            default:
                return MoveType.empty;
        }
    }

    MakeMove(type: MoveType){
        switch(type){
            case MoveType.circle:
                this.element.innerText = "O";
                break;
            case MoveType.cross:
                this.element.innerText = "X";
                break;
            
        }
    }
}

export default Field; 