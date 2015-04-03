define([
  'angular',
  'app',
  'config',
  'masonry',
  'masonry-angular',
],
function (angular, app, config, Masonry) {
  'use strict';

  var module = angular.module('grafana.controllers.profile', ['wu.masonry']);
  app.useModule(module);

  require(['jquery','jquery-bridget/jquery.bridget'], function($) {
    $.bridget('masonry', Masonry);
  });

  module.controller('ProfileCtrl', function($scope, backendSrv, contextSrv, $location) {

    $scope.init = function() {
      $scope.getUser();
      $scope.getUserOrgs();
    };

    $scope.bricks = [
     {src: 'http://lorempixel.com/g/280/143/?5098'},
     {src: 'http://lorempixel.com/g/280/371/?7544'},
     {src: 'http://lorempixel.com/g/280/537/?6995'},
     {src: 'http://lorempixel.com/g/280/143/?5098'},
     {src: 'http://lorempixel.com/g/280/371/?7544'},
    ];

    $scope.getUser = function() {
      backendSrv.get('/api/user').then(function(user) {
        $scope.user = user;
        $scope.user.theme = user.theme || 'dark';
        $scope.old_theme = $scope.user.theme;
      });
    };

    $scope.getUserOrgs = function() {
      backendSrv.get('/api/user/orgs').then(function(orgs) {
        $scope.orgs = orgs;
      });
    };

    $scope.setUsingOrg = function(org) {
      backendSrv.post('/api/user/using/' + org.orgId).then(function() {
        window.location.href = config.appSubUrl + '/profile';
      });
    };

    $scope.update = function() {
      if (!$scope.userForm.$valid) { return; }

      backendSrv.put('/api/user/', $scope.user).then(function() {
        contextSrv.user.name = $scope.user.name || $scope.user.login;
        if ($scope.old_theme !== $scope.user.theme) {
          window.location.href = config.appSubUrl + $location.path();
        }
      });
    };

    $scope.init();

  });
});
