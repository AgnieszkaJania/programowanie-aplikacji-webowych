function disabled(constructorFn: Function): void {
  constructorFn.prototype.disable = true;
}


export default disabled;