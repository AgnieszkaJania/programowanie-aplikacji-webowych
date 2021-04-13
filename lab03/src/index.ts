import { Games } from "./game.enum";
import { Game } from "./game.model";
import  GamesFactory  from "./GamesFactory";
import './styles/styles.scss';

class App {

    gamesFactory: GamesFactory;
    constructor(gamesFactory: GamesFactory) {
        this.gamesFactory = gamesFactory;
        this.initMenu();        
    }

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div'));
        menuContainer.classList.add('menuContainer'); // kontener menu dostępnych gier // lista pozycji w menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        gameContainer.classList.add('gameContainer');
        const intro = <HTMLDivElement>(document.createElement('div'));
        intro.classList.add('intro');
        intro.classList.add('introBeforeLoad');
        const mainHeader = <HTMLDivElement>document.createElement('div');
        const secondHeader = <HTMLDivElement>document.createElement('div');
        mainHeader.innerText = "Witaj !";
        secondHeader.innerText = "Wybierz swoją grę";
        intro.appendChild(mainHeader);
        intro.appendChild(secondHeader);
        document.body.appendChild(intro);
        window.addEventListener('load', ()=>{
            intro.classList.add('containerVisible');
        })
        
        
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartoťciach enum'a
        for(const gameKind of Object.keys(Games)){

            if(isNaN(Number(gameKind))){
                continue;
            }
            console.log(Number(gameKind));
            const game = this.gamesFactory.getGame(Number(gameKind));
            const item = document.createElement('div');
            item.classList.add('item');
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener('click', ()=>{
                gameContainer.innerHTML="";
                gameContainer.appendChild(game.getGameElement());

            })
            menuContainer.appendChild(item);
        }
        
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}
let gamesFactory = new GamesFactory();
let app = new App(gamesFactory);
