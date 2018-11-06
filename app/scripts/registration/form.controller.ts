namespace app.registration {

  /**
   * The form to perform the registration.
   */
  export class RegistrationFormController {

    public title: string;
    public registration: RegistrationModel;

    /**
     * $inject annotation.
     * It provides $injector with information about dependencies to be injected into constructor.
     * The parameters must match in count and type.
     */
    public static $inject = [
      '$state',
      '$stateParams'
    ];

    /**
     * Creates an instance of HomeController.
     * Dependencies are injected via AngularJS $injector.
     * @param {ng.ui.IStateService} $state - The injected $state.
     * @param {ng.ui.IStateParamsService} $stateParams - The injected $stateParams.
     * @constructor
     */
    constructor(
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService
    ) {
      this.init();
    }

    /**
     * Set title and items on init.
     */
    private init(): void {
      this.title = 'Spa Registration';
      if (this.$stateParams.obj) {
        this.registration = this.$stateParams.obj;
      }
      else {
        this.registration = new RegistrationModel();
      }
    }

    /**
     * Submits the form.
     */
    public submitRegistration(): void {
      if (this.validateForm()) {
        this.$state.go('registration-review', {obj: this.registration});
      }
    }

    /**
     * Performs validations to entered data. Changes the state of the fields.
     * @todo Make the real validations,
     * @returns true <=> No errors on the form.
     */
    private validateForm(): boolean {
      let vHasErrors: boolean = false;
      // Validate
      if (!this.registration.firstName.value) {
        vHasErrors = this.registration.firstName.hasErrors = true;
      }
      else {
        this.registration.firstName.hasErrors = false;
      }
      if (!this.registration.lastName.value) {
        vHasErrors = this.registration.lastName.hasErrors = true;
      }
      else {
        this.registration.lastName.hasErrors = false;
      }
      if (!this.registration.mobile.value) {
        vHasErrors = this.registration.mobile.hasErrors = true;
      }
      else {
        this.registration.mobile.hasErrors = false;
      }
      if (!this.registration.email.value) {
        vHasErrors = this.registration.email.hasErrors = true;
      }
      else {
        this.registration.email.hasErrors = false;
      }
      if (!this.registration.checkIn.value) {
        vHasErrors = this.registration.checkIn.hasErrors = true;
      }
      else {
        this.registration.checkIn.hasErrors = false;
      }
      if (!this.registration.checkOut.value) {
        vHasErrors = this.registration.checkOut.hasErrors = true;
      }
      else {
        this.registration.checkOut.hasErrors = false;
      }
      if (!this.registration.adults.value) {
        vHasErrors = this.registration.adults.hasErrors = true;
      }
      else {
        this.registration.adults.hasErrors = false;
      }
      if (!this.registration.children.value) {
        vHasErrors = this.registration.children.hasErrors = true;
      }
      else {
        this.registration.children.hasErrors = false;
      }
      if (!this.registration.comments.value) {
        vHasErrors = this.registration.comments.hasErrors = true;
      }
      else {
        this.registration.comments.hasErrors = false;
      }
      // R.
      return !vHasErrors;
    }
  }
}
