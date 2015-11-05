'use strict';

describe('How To Test Navigation And Routing', function() {

    describe('ui-router', function() {

        beforeEach(module('zypApp'));

        beforeEach(inject(function($templateCache) {
            $templateCache.put('home.html', '');
        }));


        describe('Basic route and state testing with ui-router', function() {

            // state
            it('default state should be home', inject(function($rootScope, $state) {
                $rootScope.$apply();
                expect($state.current.name).toEqual('home');
            }));

            // view
            it('state templateUrl should be home.html', inject(function($rootScope, $state) {
                $rootScope.$apply();
                expect($state.current.templateUrl).toEqual('home.html');
            }));

            // // controller
            it('state controller should be HomeCtrl', inject(function($rootScope, $state) {
                $rootScope.$apply();
                expect($state.current.controller).toEqual('HomeCtrl');
            }));

        });

        describe('Test transitioning state with ui-router', function() {

            var scope;
            var state;

            beforeEach(inject(function($rootScope, $state) {
                scope = $rootScope.$new();
                state = $state;
            }));

            // default state
            it('default state should be home', function() {
                scope.$apply();
                expect(state.current.name).toEqual('home');
            });

            // transition state
            it('should transition to campaigns state', function() {
                state.go('campaigns');
                scope.$apply();
                expect(state.current.name).toEqual('campaigns');
            });

            // state params
            it('should transition to emcees state passing the correct id param', function() {
                var id = '1';
                state.go('campaigns', {id: id});
                console.log(state)
                scope.$apply();
                expect(state.params.id).toEqual(id);
            });

            // path params
            it('campaigns path should include correct id', inject(function($location) {
                var id = '1';
                state.go('campaigns', {id: id});
                scope.$apply();
                expect($location.path()).toEqual('/campaigns/' + id);
            }));
        });

    });

});
