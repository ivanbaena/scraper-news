// template decorator

export function color(value: string): Function {
  // this is the decorator factory
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ): void {
    // this is the decorator
    // do something with 'target' and 'value'...
    console.log('value', value);
    console.log('target', target);
    console.log('propertyKey', propertyKey);
  };
}
