import { Game } from "./game.model";

function turnedOff(
  target: Game,
  propKey: string,
  descriptor: TypedPropertyDescriptor<any>
): any {
  const originalFn = descriptor.value;
  descriptor.value = function (param) {
    const args = [];
    args.push(param);
    console.log(target.disable);
    if (target.disable === false || target.disable === undefined){
        console.log("umiem")
        const a = originalFn.apply(this, args);
        console.log(a);
        return a;
    }
    else
        return document.createElement("div");
  };
}

export default turnedOff;
