System.register(["./application.2b536.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_application2b536Js) {
      Application = _application2b536Js.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});
    function urlBase64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    // 检测浏览器是否支持SW
    if ('serviceWorker' in navigator) {
        // 为当前页面注册Service Worker
        navigator.serviceWorker.register('./sw.develop_v1.10.5.js')
            .then(function (registartion) {
                console.log("registe success")
                // return registartion.pushManager
                //     .getSubscription()
                //     .then(async function (subscription) {
                //         // 注册部分
                //         if (subscription) {
                //             return subscription;
                //         } else {
                //             const convertedVapidKey = urlBase64ToUint8Array('BKwG42txSm_T8qr3X1QMKAPvPvd1pY5NJ69XkB9OlLBRS2HAP8jwTq6pCB0Xhog7ks2zqZATtuxUpHkYemYlZxg');
                //             return registartion.pushManager.subscribe({
                //                 userVisibleOnly: true,
                //                 applicationServerKey: convertedVapidKey
                //             });
                //         }
                    }
                )
            // .then(function (subscription) {
            //             // Send the subscription details to the server using the Fetch API.
            //             console.log("subscription,", subscription)
            //             fetch('http://localhost:3004/subscribe', {
            //                 method: 'POST',
            //                 headers: {
            //                     'Content-Type': 'application/json'
            //                 },
            //                 body: JSON.stringify(subscription)
            //             });
            //             window.forceServicePush = function () {
            //                 fetch('http://localhost:3004/sendNotification', {
            //                     method: 'post',
            //                     headers: {
            //                         'Content-type': 'application/json'
            //                     },
            //                     body: JSON.stringify({
            //                         subscription: subscription,
            //                         payload: "hahaha",
            //                         delay: 5,
            //                         ttl: 10,
            //                     }),
            //                 }).then(response => {
            //                     // 请求成功，处理返回的响应
            //                     if (!response.ok) {
            //                         throw new Error('Network response was not ok');
            //                     }
            //                     return response.json(); // 解析 JSON 格式的响应数据
            //                 })
            //                     .then(data => {
            //                         // 成功处理响应数据
            //                         console.log('Data received:', data);
            //                     })
            //                     .catch(error => {
            //                         // 处理请求失败或其他错误
            //                         console.error('Error:', error);
            //                     });
            //             }

            //         }).catch(function (error) {
            //             console.error('Failed to subscribe the user:', error);
            //         });
            // })
        }
        