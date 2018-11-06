namespace app {

  /**
   * Main angular module.
   */
  angular.module('app', [
    'ui.router',
    'app.config'
  ])

    /**
     * Configs
     */
    .config(app.configs.CompileConfiguration)
    .config(app.configs.StateProviderConfiguration)

    /**
     * Controllers
     */
    .controller('RegistrationFormController', app.registration.RegistrationFormController)
    .controller('RegistrationReviewController', app.registration.RegistrationReviewController)
    ;
}
