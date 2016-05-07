'use strict';


angular.module('app').controller('AppController', ['$scope', 'growl', 'appService',
	function($scope, growl, appService) {
		$scope.companyRegister = function(company, companyForm){
			if(companyForm.$valid){	
				appService.save({url: 'company'}, company).$promise.then(function(response){
					growl.addSuccessMessage('Succesfully Created');
					$scope.company = {};
					$scope.getAllCompany();
				}).catch(function(err){
					growl.addErrorMessage('oops something went wrong');
				});
			}
			else{
				return false;
			}
		}
		$scope.companyUpdate = function(company, companyForm){
			if(companyForm.$valid){	
				appService.update({url: 'company', id: company._id}, company).$promise.then(function(response){
					growl.addSuccessMessage('Succesfully Updated');
					$scope.company = {};
					$scope.getAllCompany();
				}).catch(function(err){
					growl.addErrorMessage('oops something went wrong');
				});
			}
			else{
				return false;
			}
		}
		$scope.getAllCompany = function(){
			appService.getArray({url: 'company'}).$promise.then(function(response){
				$scope.companyList = response;
			}).catch(function(err){
				growl.addErrorMessage('oops something went wrong');
			});
		}

		$scope.delete = function(id){
			appService.delete({url: 'company', id: id}).$promise.then(function(response){
				$scope.getAllCompany();
			}).catch(function(err){
				growl.addErrorMessage('oops something went wrong');
			});
		}

		$scope.getAllCompany();
	}
]);