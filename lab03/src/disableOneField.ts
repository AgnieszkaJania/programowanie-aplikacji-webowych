
function disableOneField(
    target: number,
    propKey: string,
    descriptor: PropertyDescriptor
  ): any {
    const originalFn = descriptor.value;
    descriptor.value = function (param) {
      const args = [];
      args.push(param);
      if(target <= 1){
        return document.createElement('div');
      }
      else{
        return originalFn.apply(this, args);
      }
      
    };
  }
  
  export default disableOneField;