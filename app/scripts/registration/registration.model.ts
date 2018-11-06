namespace app.registration {
  /**
   * The model of a registration request.
   */
  export class RegistrationModel {
    public firstName: FormItem = new FormItem();
    public lastName: FormItem = new FormItem();
    public mobile: FormItem = new FormItem();
    public email: FormItem = new FormItem();
    public checkIn: FormItem = new FormItem();
    public checkOut: FormItem = new FormItem();
    public adults: FormItem = new FormItem();
    public children: FormItem = new FormItem();
    public comments: FormItem = new FormItem();
  }

  /**
   * A simplified model for an element in a form.
   */
  export class FormItem {
    public value: string;
    public hasErrors: boolean = false;
  }
}
