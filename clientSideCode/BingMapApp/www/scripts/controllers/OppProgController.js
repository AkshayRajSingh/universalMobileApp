
app.controller('oppprogctrl', function ($scope, $http, Serviceurl) {
    //debugger;
    document.getElementById("Loading").style.display = "block";
    var uid = window.localStorage.getItem("uid");
    var location = window.localStorage.getItem("location");
    var accountManagerNames = window.localStorage.getItem("accountManagerNames");
    $http.get(Serviceurl + "/opportunitiesinprogress/" + uid + "/" + location + "/" + accountManagerNames)
   .success(function (response) {
       //debugger;
       $scope.opportunitiesinprogress = response;
       document.getElementById("Loading").style.display = "none";
   })
   .error();


    $scope.backtoPage = function () {
        window.location.href = "Accountmanagertiles.html";
    }
});