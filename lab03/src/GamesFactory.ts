import { Games } from "./game.enum";
import { Game } from "./game.model";
import {TicTacToe} from "../tictactoe/tictactoe"; 
import {BattleShips} from "../Battleships/battleships"; 

class GamesFactory{
    getGame(game: Games): Game | undefined{
        let gameR: Game;
        switch(game){
            case Games.TicTacToe:
                console.log('TicTacToe')
                gameR = new TicTacToe();
                break;
            case Games.BattleShips:
                console.log('Battle');
                gameR = new BattleShips();
                break;
            default:
                throw new Error('Invalid game');
        }
        if(gameR.disable === true){
            return undefined;
        }
        return gameR;
    }
}

export default GamesFactory;