import Line from './Line';
import Field from './Field';
import  MoveType  from './MoveType';


class Board{

    board: Element;
    size: number;
    fields: Field[] = new Array();
    move: MoveType = MoveType.cross;
    winLength: number;
    gameContainer: HTMLDivElement;
    
    constructor(size:number, winLength:number){
        this.size = size;
        this.board = document.createElement('div');
        this.board.classList.add('Board');
        this.winLength = winLength;
        this.gameContainer = <HTMLDivElement>(document.getElementById('TicTacToeContainer'));
        this.gameContainer.appendChild(this.board);
        this.Init();
        
        
    }
    // GetBoard(): HTMLElement{
    //     return this.board;
    // }
    private Init(){

        this.board.innerHTML = '';

        for(let i = 0; i < this.size; i++){
            const line = new Line();
            this.board.appendChild(line.element);
            
            for(let j = 0; j < this.size; j++){
                const field = new Field(i,j);
                line.element.appendChild(field.element);
                this.fields.push(field);
                field.element.addEventListener('click', this.MakeMove)
            }
        }
    }

    public MakeMove =(e:MouseEvent)=>{
        console.log(this.move)
        const target = <HTMLElement>e.target;
        const id = target.id;

        const clickedField =  this.fields.find((el)=>el.Equal(id));

        if(clickedField && clickedField.State() == MoveType.empty){
            clickedField.MakeMove(this.move);
            
            if(this.move == MoveType.circle){
                this.move = MoveType.cross;
                console.log(this.move)
            }else{
                this.move = MoveType.circle;
                console.log(this.move)
            }

            this.CheckWin(clickedField);
            
        }
        
    }
    CheckFull():boolean{
        let IsFull = true;
        for(let i = 0; i < this.size*this.size; i++){
            if(this.fields[i].State() == MoveType.empty){
                IsFull = false;
            }
        }
        return IsFull;

    }
    // CheckValues(fieldsArray: Field[], fieldType: MoveType): boolean{
    //     let iswon = true;
    //     fieldsArray.forEach(element => {
    //         if(element.State() != fieldType){
    //             iswon = false;
    //         }
    //     })
    //     return iswon;

    // }
    CheckWin(field:Field){
        let FieldType = field.State();
        let isWon = true;
        let FieldsByRow = this.fields.filter(el => el.row == field.row);
        let FieldsByColumn = this.fields.filter(e => e.column == field.column);
        let FieldsLeftRight = this.fields.filter(el => el.row == el.column);
        let FieldsRightLeft = this.fields.filter(el => el.column  == (this.size - 1 - el.row));
        FieldsByColumn.forEach(element => {
            
            if(element.State() != FieldType){
                isWon = false;
               
            }
        })
        if(!isWon){
            isWon = true;
            FieldsByRow.forEach(element => {
                if(element.State() != FieldType){
                    isWon = false;
                    
                }
            });
        }
        if(!isWon){
            isWon = true;
            FieldsLeftRight.forEach(element => {
                if(element.State() != FieldType){
                    isWon = false;
                    
                }
            });
        }
        if(!isWon){
            isWon = true;
            FieldsRightLeft.forEach(element => {
                if(element.State() != FieldType){
                    isWon = false;
                    
                }
            });
        }
        if(this.CheckFull() && !isWon){
            let message = 'Remis !';
            let box = document.createElement('div');
            box.id = 'win';
            box.innerHTML = message;
            document.getElementById('TicTacToeContainer').appendChild(box);
            let fields = document.getElementsByClassName('Field');
            for(let j = 0; j < fields.length; j++){
                
                fields[j].removeEventListener('click', this.MakeMove);
            }
        }
       
        if(isWon){
            
            //alert(`${FieldType == 1 ? 'Cross' : 'Circle'} won !`);
            let message = `${FieldType == 1 ? 'Cross' : 'Circle'} won !`;
            let box = document.createElement('div');
            box.id = 'win';
            box.innerHTML = message;
            document.getElementById('TicTacToeContainer').appendChild(box);
            let fields = document.getElementsByClassName('Field');
            for(let j = 0; j < fields.length; j++){
                
                fields[j].removeEventListener('click', this.MakeMove);
            }
          
        }

    }


    
}
export default Board;