import { Games } from "./game.enum";
import { Game } from "./game.model";
import {TicTacToe} from "../tictactoe/tictactoe"; 
import {BattleShips} from "../Battleships/battleships"; 

class GamesFactory{
    getGame(game: Games): Game{
        switch(game){
            case Games.TicTacToe:
                console.log('TicTacToe')
                return new TicTacToe();
            case Games.BattleShips:
                console.log('Battle');
                return new BattleShips();
            default:
                throw new Error('Invalid game');

            
        }
    }
}

export default GamesFactory;