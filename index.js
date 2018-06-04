// Основные сведения о пустом шаблоне см. в следующей документации:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Для отладки кода на странице загрузите его в cordova-simulate либо в эмулятор или на устройство Android: запустите приложение, задайте точки останова. 
// , а затем запустите "window.location.reload()" в консоли JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Обработка событий приостановки и возобновления Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Платформа Cordova загружена. Выполните здесь инициализацию, которая требуется Cordova.
        //var parentElement = document.getElementById('deviceready');
       // var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');
        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');
        navigator.geolocation.getCurrentPosition(onGetLocationSuccess, oneGetLocationError, { enableHighAccuracy: true });
        function onGetLocationSuccess(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var myMap = L.map('map', {
                center: [latitude, longitude],
                zoom: 16
            });
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href= "http://openstreetmap.org"> OpenStreeetMap</a> contributors'

            }).addTo(myMap);
            var myIcon = L.icon({
                iconUrl: 'images/marker-icon.png',
                shadowUrl: 'images/marker-shadow.png'
            });
            var marker = L.marker([latitude, longitude], { icon: myIcon }), bindPopup("My device");
            myMap.addLayer(marker);
        };
        function onGetLocation(error) {
            alert("CAn not get geolocation");
        }
    };

    function onPause() {
        // TODO: Это приложение приостановлено. Сохраните здесь состояние приложения.
    };

    function onResume() {
        // TODO: Это приложение активировано повторно. Восстановите здесь состояние приложения.
    };
} )();