var m1 = angular.module('module1',[]);
m1.config(['$httpProvider',
	function ($httpProvider) {
		$httpProvider.defaults.withCredentials = true; //设定Cookie支持
		// Use x-www-form-urlencoded Content-Type
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
		$httpProvider.defaults.headers.post['Accept'] = 'application/json';
		$httpProvider.defaults.headers.put['Accept'] = 'application/json';
		// Override $http service's default transformRequest
		$httpProvider.defaults.transformRequest = [function(data)
		{
			/**
			 * The workhorse; converts an object to x-www-form-urlencoded serialization.
			 * @param {Object} obj
			 * @return {String}
			 */
			var param = function(obj)
			{
				var query = '';
				var name, value, fullSubName, subName, subValue, innerObj, i;
				for(name in obj)
				{
					value = obj[name];
					if(value instanceof Array)
					{
						//  console.log("Array");
						for(i=0; i<value.length; ++i)
						{
							subValue = value[i];
							fullSubName = name + '[' + i + ']';
							innerObj = {};
							innerObj[fullSubName] = subValue;
							query += param(innerObj) + '&';
						}
					}
					else if(value instanceof Object)
					{
						// console.log("object");
						for(subName in value)
						{
							subValue = value[subName];
							if(subValue != null){
								// fullSubName = name + '[' + subName + ']';
								//user.userName = hmm & user.userPassword = 111
								fullSubName = name + '.' + subName;
								// fullSubName =  subName;
								innerObj = {};
								innerObj[fullSubName] = subValue;
								query += param(innerObj) + '&';
							}
						}
					}
					else if(value !== undefined ) //&& value !== null
					{
						// console.log("undefined");
						query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
					}
				}
				return query.length ? query.substr(0, query.length - 1) : query;
			};
			return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
		}]
		$httpProvider.defaults.useXDomain = true;
	}
]);

m1.factory('db', ['$http', '$q', function($http, $q) {
	return {
		getData: function(url, parama) {
			var deferred = $q.defer();
			$http.post(url, parama)
				.success(function(response, status, headers, config) {
					deferred.resolve(response);
				}).error(function(response, status, headers, config){
				var errorObj = {
					response: response,
					status: status,
					headers: headers,
					config: config
				};
				deferred.reject(errorObj);
			});
			return deferred.promise;
		}
	}
}]);