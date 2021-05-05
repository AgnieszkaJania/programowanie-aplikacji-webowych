import Role from "../role";

function checkAcces(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = descriptor.value;
  descriptor.value = function (param) {
    
    const args = [];
    args.push(param);
    
    if(param.access?.includes(param.role))
        return originalFn.apply(this, args);
    return;
  };
}

export default checkAcces;
