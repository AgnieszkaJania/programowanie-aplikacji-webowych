import Role from "../role";

export function AdminAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Admin;
}

export function forAdmin(target: object, propKey: string, descriptor: PropertyDescriptor) {
  const originalFn = descriptor.value;
  descriptor.value = function (param) {
    const args = []; 
    if(!param.access)
        param.access = [];
    param.access.push(Role.Admin);
    args.push(param);

    return originalFn.apply(this, args);
  };
}
