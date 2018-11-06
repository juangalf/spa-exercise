namespace test {

    describe('Registration Form Controller', () => {
      // Declare dependencies and common vars
      let formController: app.registration.RegistrationFormController,
        $state: ng.ui.IStateService,
        $params: ng.ui.IStateParamsService;
      // Setup dependencies/mocks
      beforeEach(() => {
        angular.mock.module('app');
        // Injections
        angular.mock.inject((
            _$state_: ng.ui.IStateService,
            _$params_: ng.ui.IStateParamsService,
            ) => {
                $state = _$state_;
                $params = _$params_;
            });
        formController = new app.registration.RegistrationFormController($state, $params);
      });
      it('should test title', () => {
        expect(formController.title).toEqual('Spa Registration');
      });
    });
  }
