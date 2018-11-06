namespace app.registration {

  /**
   * The screen to review the data entered in the registration.
   */
  export class RegistrationReviewController {

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
      if (this.$stateParams.obj) {
        this.registration = this.$stateParams.obj;
      }
      else {
        this.registration = new RegistrationModel();
      }
    }

    /**
     * Set title and items on init.
     */
    private init(): void {
      this.title = 'Registration Review';
    }

    /**
     * Go to the edit form.
     */
    public editRegistration(): void {
      this.$state.go('registration-form', {obj: this.registration});
    }
  }
}
