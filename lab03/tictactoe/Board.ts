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
    withComputer:boolean;
    popUpContainer: HTMLDivElement;
    popUpContent: HTMLElement;
    popUpCloseBtn: HTMLDivElement;
    
    constructor(size:number, winLength:number, withComputer: boolean){
        this.size = size;
        this.board = document.createElement('div');
        this.board.classList.add('Board');
        this.winLength = winLength;
        this.gameContainer = <HTMLDivElement>(document.getElementById('TicTacToeContainer'));
        this.gameContainer.appendChild(this.board);
        this.withComputer = withComputer;
        this.popUpContainer = document.createElement('div');
        this.popUpContainer.classList.add('notDisplayed');
        this.popUpContent = document.createElement('div');
        this.popUpContent.id = 'popUpContent';
        this.popUpContainer.appendChild(this.popUpContent);
        this.popUpCloseBtn = document.createElement('div');
        this.popUpCloseBtn.innerText = "OK";
        this.popUpCloseBtn.id = 'confirmResult';
        this.popUpContainer.appendChild(this.popUpCloseBtn);
        this.gameContainer.appendChild(this.popUpContainer);
        this.popUpCloseBtn.addEventListener('click', ()=>{
            this.popUpContainer.classList.remove('containerVisible');
            
        })
        this.Init();
        
        
    }
    
    private Init(){

        this.board.innerHTML = '';

        for(let i = 0; i < this.size; i++){
            const line = new Line();
            this.board.appendChild(line.element);
            
            for(let j = 0; j < this.size; j++){
                const field = new Field(i,j);
                line.element.appendChild(field.element);
                this.fields.push(field);
                if(this.withComputer){
                    field.element.addEventListener('click', this.MakeMoveWithComputer);
                }else{
                    field.element.addEventListener('click', this.MakeMove);
                }
               
            }
        }
    }
    public MakeMoveWithComputer=(e:MouseEvent)=>{
        const target = <HTMLElement>e.target;
        const id = target.id;
        this.move = MoveType.cross;

        const clickedField =  this.fields.find((el)=>el.Equal(id));

        if(clickedField && clickedField.State() == MoveType.empty){
            clickedField.MakeMove(this.move);
            if(this.CheckWin(clickedField)){
                this.fields.forEach(field =>{
                    field.element.removeEventListener('click', this.MakeMoveWithComputer);
                })
                this.ShowResult('Wygrałeś !');
                return;
            }
            if(this.CheckFull() && !this.CheckWin(clickedField)){
                this.ShowResult('Remis !');
                return;
            }
            let chosenField = this.ComputerMove();
            console.log(chosenField);
            if(this.CheckWin(chosenField)){
                        this.fields.forEach(field =>{
                        field.element.removeEventListener('click', this.MakeMoveWithComputer);
                    })
                    this.ShowResult('Wygrał komputer !');
            }
            if(this.CheckFull() && !this.CheckWin(chosenField)){
                this.ShowResult('Remis !');
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
            if(this.CheckWin(clickedField)){
                this.fields.forEach(field =>{
                    field.element.removeEventListener('click', this.MakeMove);
                })
                this.ShowResult(`${clickedField.State() == MoveType.cross ? 'Cross' : 'Circle'} won !`);
            }
            if(this.CheckFull() && !this.CheckWin(clickedField)){
                this.ShowResult('Remis !');
            }
           
            if(this.move == MoveType.circle){
                this.move = MoveType.cross;
                console.log(this.move)
            }else{
                this.move = MoveType.circle;
                console.log(this.move)
            }
             
        }
        
    }
    
    ComputerMove(): Field{
        
        let emptyFields = this.fields.filter(el => el.State() == MoveType.empty);
        console.log(emptyFields);
        let moved = false;
        for(let x = 0; x < emptyFields.length;x++){
           emptyFields[x].MakeMove(MoveType.circle);
           if(this.CheckWin(emptyFields[x])){        
                moved = true;
                console.log(emptyFields[x]);
                return emptyFields[x];
               
            }
            emptyFields[x].MakeMove(MoveType.cross);
            if(!moved && this.CheckWin(emptyFields[x])){
                    emptyFields[x].MakeMove(MoveType.circle);
                    moved = true;
                    console.log(emptyFields[x]);
                    console.log(x);
                    return emptyFields[x];
            }
            if(!moved){
                emptyFields[x].MakeMove(MoveType.empty);
                console.log(emptyFields[x]);
                
            }
            
        }
        if(!moved){
            emptyFields[0].MakeMove(MoveType.circle);
            return emptyFields[0];
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
    
    CheckWin(field:Field):boolean{
        let FieldType = field.State();
        let isWon = false;
        let FieldsByRow = this.fields.filter(el => el.row == field.row);
        let FieldsByColumn = this.fields.filter(e => e.column == field.column);
        let FieldsLeftRight = this.fields.filter(el => el.row == el.column);
        let FieldsRightLeft = this.fields.filter(el => el.column  == (this.size - 1 - el.row));
        let horizontal = 1, vertical = 1, diagonalX = 1, diagonalY = 1;

        for(let a = field.row-1; a >= 0; a--){
            if(FieldsByColumn[a].State() == FieldType){
                vertical++;
            }else{
                break;
            }
        }
        
        for(let a = field.row+1; a < this.size; a++){
            if(FieldsByColumn[a].State() == FieldType){
                vertical++;
            }else{
                break;
            }
        }
        for(let a = field.column-1; a >= 0; a--){
            if(FieldsByRow[a].State() == FieldType){
                horizontal++;
            }else{
                break;
            }

        }
        for(let a = field.column+1; a < this.size; a++){
            if(FieldsByRow[a].State() == FieldType){
                horizontal++;
            }else{
                break;
            }

        }
        if(field.column == field.row){
            for(let a = field.row-1; a >= 0; a--){
                if(FieldsLeftRight[a].State() == FieldType){
                    diagonalX++;
                }else{
                    break;
                }
            }
            for(let a = field.row+1; a < this.size; a++){
                if(FieldsLeftRight[a].State() == FieldType){
                    diagonalX++;
                }else{
                    break;
                }
            }
        }
        if(field.column == (this.size - 1 - field.row)){
            for(let a = field.row-1; a >= 0; a--){
                if(FieldsRightLeft[a].State() == FieldType){
                    diagonalY++;
                }else{
                    break;
                }
            }
            for(let a = field.row+1; a < this.size; a++){
                if(FieldsRightLeft[a].State() == FieldType){
                    diagonalY++;
                }else{
                    break;
                }
            }
        }
        if(vertical >= this.winLength || horizontal >= this.winLength || diagonalX >= this.winLength || diagonalY >= this.winLength){
            isWon = true;
            console.log(horizontal);
            console.log(vertical);
            console.log(diagonalY);
            console.log(diagonalX);
        }
        
        return isWon;

    }
    ShowResult(text:string){
        
        let info = <HTMLElement>document.getElementById('popUpContent');
        info.innerText = text;
        this.popUpContainer.classList.add('containerVisible');
        
    }
    
}
export default Board;