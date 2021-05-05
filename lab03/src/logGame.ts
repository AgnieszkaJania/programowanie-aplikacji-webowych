import {Game} from './game.model';

function LogGame(target: Game, propKey: string, descriptor: PropertyDescriptor){
    const originalFn = descriptor.value;
    descriptor.value = function(param){
        const args = [];
        args.push(param);
        console.log(`Wywołano grę: ${target.constructor.name}`);
        return originalFn.apply(this, args);
    }
}

export default LogGame;