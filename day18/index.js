 var app = angular.module("myApp", [])
 app.controller("myCtrl", function($scope, $http, $log) {
     //请求大类
     var cateurl = 'http://127.0.0.1:8083/console/scene/devicecategory';
     $http({
         method: "get",
         url: cateurl,
         headers: {
             "content-type": "application/json",
             "AccessToken": "eyJhbGciOiJIUzUxMiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOiIwMSIsImV4cGlyIjoxNDk4MTE1Nzg3MzgyLCJpc3MiOiIifQ.G_4eRhKHlwsolTcm3hsuEju6H-Zdu1jI7PXjNQOKlA65MQ8ow3KP3Suzpz__qeo_hJhMpT011hwX7_XN5y65jg"
         }
     }).then(function(req) {
         $log.log("category:")
         $log.log(req.data.retBody.DeviceCategory)
         $scope.categorys = req.data.retBody.DeviceCategory
     })



     /**
      *  根据大类来获取设备列表
      * @param x 设备类别id
      */
     $scope.changeType = function(x) {
         $log.log(x.id)
         var devdefurl = 'http://127.0.0.1:8083/console/scene/devicedefinition/' + x.id
         $http({
             method: "get",
             url: devdefurl,
             headers: {
                 "content-type": "application/json",
                 "AccessToken": "eyJhbGciOiJIUzUxMiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOiIwMSIsImV4cGlyIjoxNDk4MTE1Nzg3MzgyLCJpc3MiOiIifQ.G_4eRhKHlwsolTcm3hsuEju6H-Zdu1jI7PXjNQOKlA65MQ8ow3KP3Suzpz__qeo_hJhMpT011hwX7_XN5y65jg"
             }
         }).then(function(req) {
             $log.log("devicedefinition:")
             $log.log(req.data.retBody.DeviceDefinitionList)
             $scope.devicedefinitions = req.data.retBody.DeviceDefinitionList
         })
     }

     /**
      * 设备选择后触发函数
      * @param x 设备id
      */
     $scope.changeDev = function(x) {
         $log.log(x.id)
         var devdetailurl = 'http://127.0.0.1:8083/console/scene/devicedetail/' + x.id
         $http({
             method: "get",
             url: devdetailurl,
             headers: {
                 "content-type": "application/json",
                 "AccessToken": "eyJhbGciOiJIUzUxMiIsInR5cGUiOiJKV1QifQ.eyJzdWIiOiIwMSIsImV4cGlyIjoxNDk4MTE1Nzg3MzgyLCJpc3MiOiIifQ.G_4eRhKHlwsolTcm3hsuEju6H-Zdu1jI7PXjNQOKlA65MQ8ow3KP3Suzpz__qeo_hJhMpT011hwX7_XN5y65jg"
             }
         }).then(function(req) {
             $log.log("devdetails:")
             $log.log(req.data.retBody.DeviceDetail.properties)
             $scope.devicedetails = req.data.retBody.DeviceDetail.properties
         })
     }

     $scope.changeParam = function(x) {
         $log.log(x)
         $scope.type = x.data_type

         $scope.data_ranges = eval(x.data_range)
         $log.log($scope.data_ranges)
     }

 })