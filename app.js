var app = angular.module('crowdfundingApp', ['ngRoute']); // Include ngRoute for routing

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'WelcomeController'
        })
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/user-signin', {
            templateUrl: 'user-signin.html',
            controller: 'UserSignInController'
        })
        .when('/company-signin', {
            templateUrl: 'company-signin.html',
            controller: 'CompanySignInController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('WelcomeController', ['$scope', '$location', function($scope, $location) {
    $scope.showOptions = false;

    $scope.goToLogin = function() {
        $location.path("C://Users//srian//Desktop//Major//login.html"); // Navigate to login page
    };

    $scope.showSignInOptions = function() {
        $scope.showOptions = true;
    };

    $scope.goToUserSignIn = function() {
        $location.path("C://Users//srian//Desktop//Major//user-signin.html"); // Navigate to user sign-in page
    };

    $scope.goToCompanySignIn = function() {
        $location.path('/company-signin'); // Navigate to company sign-in page
    };
}]);

// You may also want to create controllers for login, user sign-in, and company sign-in.
app.controller('LoginController', function($scope) {
    $scope.username = '';
    $scope.password = '';

    $scope.login = function() {
        // Handle login logic (validate credentials)
        alert('Logging in with Username: ' + $scope.username);
        // Here, you would typically send a request to your backend for validation
    };
});

app.controller('UserSignInController', function($scope) {
    $scope.fullName = '';
    $scope.email = '';
    $scope.phoneNumber = '';
    $scope.otp = '';
    $scope.password = '';
    $scope.otpSent = false;

    $scope.sendOTP = function() {
        // Logic to send OTP to the user's phone number
        alert('OTP sent to ' + $scope.phoneNumber);
        $scope.otpSent = true; // Show OTP input after sending OTP
    };

    $scope.signIn = function() {
        // Handle user sign-in logic
        alert('Signing in User: ' + $scope.fullName);
    };
});

app.controller('CompanySignInController', function($scope) {
    $scope.companyName = '';
    $scope.companyEmail = '';
    $scope.phoneNumber = '';
    $scope.otp = '';
    $scope.password = '';
    $scope.otpSent = false;

    $scope.sendOTP = function() {
        // Logic to send OTP to the company's phone number
        alert('OTP sent to ' + $scope.phoneNumber);
        $scope.otpSent = true; // Show OTP input after sending OTP
    };

    $scope.signIn = function() {
        // Handle company sign-in logic
        alert('Signing in Company: ' + $scope.companyName);
    };
});
