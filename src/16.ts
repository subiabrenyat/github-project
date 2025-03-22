// File: myModule.ts
import { MyComponent } from "./myComponent";

export default class MyClass {
  // Class-level variable
  @MyComponent.myFunction("value")
  private myProperty = "propertyValue";

  public method1() {
    console.log(this.myProperty);
  }

  public method2() {
    return this.myProperty;
  }
}
