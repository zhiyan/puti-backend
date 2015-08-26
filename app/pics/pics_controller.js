(function(){
  'use strict';


  angular.module('view-pics',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/pics', {
          templateUrl: 'pics/pics.html',
          controller: 'PicsCtrl'
        });
    })
    .controller('PicsCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "pics";

          var uploader = Qiniu.uploader({
              runtimes: 'html5,flash,html4',
              browse_button: 'pickfiles',
              container: 'pics-container',
              drop_element: 'pics-container',
              max_file_size: '2mb',
              flash_swf_url: 'js/plupload/Moxie.swf',
              dragdrop: true,
              chunk_size: '1mb',
              uptoken_url: "http://localhost:19110/uptoken",
              domain: "http://7xl47l.com1.z0.glb.clouddn.com/",
              // downtoken_url: '/downtoken',
              unique_names: true,
              // save_key: true,
              // x_vars: {
              //     'id': '1234',
              //     'time': function(up, file) {
              //         var time = (new Date()).getTime();
              //         // do something with 'time'
              //         return time;
              //     },
              // },
              auto_start: true,
              init: {
                  'FilesAdded': function(up, files) {
                      $('#pics-table').show();
                      $('#pics-success').hide();
                      plupload.each(files, function(file) {
                          var progress = new FileProgress(file, 'fsUploadProgress');
                          progress.setStatus("等待...");
                          progress.bindUploadCancel(up);
                      });
                  },
                  'BeforeUpload': function(up, file) {
                      var progress = new FileProgress(file, 'fsUploadProgress');
                      var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                      if (up.runtime === 'html5' && chunk_size) {
                          progress.setChunkProgess(chunk_size);
                      }
                  },
                  'UploadProgress': function(up, file) {
                      var progress = new FileProgress(file, 'fsUploadProgress');
                      var chunk_size = plupload.parseSize(this.getOption('chunk_size'));
                      progress.setProgress(file.percent + "%", file.speed, chunk_size);
                  },
                  'UploadComplete': function() {
                      $('#pics-success').show();
                  },
                  'FileUploaded': function(up, file, info) {
                      var progress = new FileProgress(file, 'fsUploadProgress');
                      progress.setComplete(up, info);
                  },
                  'Error': function(up, err, errTip) {
                      $('pics-table').show();
                      var progress = new FileProgress(err.file, 'fsUploadProgress');
                      progress.setError();
                      progress.setStatus(errTip);
                  }
                      // ,
                      // 'Key': function(up, file) {
                      //     var key = "";
                      //     // do something with key
                      //     return key
                      // }
              }
          });

          uploader.bind('FileUploaded', function() {});

          $('#pics-container').on(
              'dragenter',
              function(e) {
                  e.preventDefault();
                  $('#pics-container').addClass('draging');
                  e.stopPropagation();
              }
          ).on('drop', function(e) {
              e.preventDefault();
              $('#pics-container').removeClass('draging');
              e.stopPropagation();
          }).on('dragleave', function(e) {
              e.preventDefault();
              $('#pics-container').removeClass('draging');
              e.stopPropagation();
          }).on('dragover', function(e) {
              e.preventDefault();
              $('#pics-container').addClass('draging');
              e.stopPropagation();
          });


          // $('body').on('click', 'table button.btn', function() {
          //     $(this).parents('tr').next().toggle();
          // });

      });

})();