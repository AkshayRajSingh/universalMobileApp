// JavaScript source code
app.controller('dmopplostctrl', function ($scope, $http, Serviceurl) {
    //debugger;
    document.getElementById("Loading").style.display = "block";
    var uid = window.localStorage.getItem("uid");
    var location = window.localStorage.getItem("location");
    var DeliveryManagerNames = window.localStorage.getItem("DeliveryManagerNames");
    $http.get(Serviceurl + "/dmopportunitieslost/" + uid + "/" + location + "/" + DeliveryManagerNames)
   .success(function (response) {
       //debugger;
       $scope.dmopportunitieslost = response;
       var onsite = 0;
       var offshore = 0;
       for (var i in response) {
           onsite += parseInt(response[i].OpportunityLostOnsite);
           offshore += parseInt(response[i].OpportunityLostOffshore);
       }
       $scope.onsite = onsite;
       $scope.offshore = offshore;
       document.getElementById("Loading").style.display = "none";
   })
   .error();


    $scope.backtoPage = function () {
        window.location.href = "DeliveryManagerTiles.html";
    }
});