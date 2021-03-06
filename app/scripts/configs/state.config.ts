namespace app.configs {

  /**
   * This class represents state provider configuration.
   */
  export class StateProviderConfiguration {

    /**
     * $inject annotation.
     * It provides $injector with information about dependencies to be injected into constructor.
     * The parameters must match in count and type.
     */
    public static $inject = [
      '$stateProvider',
      '$urlRouterProvider'
    ];

    /**
     * Creates an instance of StateProviderConfiguration.
     * @param {ng.ui.IStateProvider} $stateProvider - The injected $stateProvider.
     * @param {ng.ui.IUrlRouterProvider} $urlRouterProvider - The injected $urlRouterProvider.
     * @constructor
     */
    constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
      .state('registration-form', {
        url: '/registration',
        templateUrl: 'templates/registration/form.template.html',
        controller: 'RegistrationFormController',
        controllerAs: 'presenter',
        params: {obj: null}
      })
      .state('registration-review', {
        url: '/review',
        templateUrl: 'templates/registration/review.template.html',
        controller: 'RegistrationReviewController',
        controllerAs: 'presenter',
        params: {obj: null}
      })
      ;

      // If none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/registration');
    }
  }
}
