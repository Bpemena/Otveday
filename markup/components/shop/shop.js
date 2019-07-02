$(document).ready(function() {
	var map;

    DG.then(function () {
        if ($(window).width() < 1550) {
        map = DG.map('map', {
            center: [52.283866,76.956332],
            zoom: 15,
            doubleClickZoom: false,
            boxZoom: false,
            zoomControl: false,
            fullscreenControl: false
        });

        var myIcon = DG.divIcon({className: 'my-div-icon', html: '<div style="background:red; width: auto; height: auto;"><svg width="37" height="51" viewBox="0 0 37 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5002 0.0834961C8.66391 0.0834961 0.708496 8.03891 0.708496 17.8752C0.708496 31.2189 18.5002 50.9168 18.5002 50.9168C18.5002 50.9168 36.2918 31.2189 36.2918 17.8752C36.2918 8.03891 28.3364 0.0834961 18.5002 0.0834961ZM18.5002 24.2293C14.9927 24.2293 12.146 21.3827 12.146 17.8752C12.146 14.3677 14.9927 11.521 18.5002 11.521C22.0077 11.521 24.8543 14.3677 24.8543 17.8752C24.8543 21.3827 22.0077 24.2293 18.5002 24.2293Z" fill="#009600"/></svg></div>'});

        DG.marker([52.288083, 76.967629],{icon: myIcon}).addTo(map).bindPopup('Проспект независимости, 29/4');
        DG.marker([52.287274, 76.969791],{icon: myIcon}).addTo(map).bindPopup('Пушкина, 115');
        DG.marker([52.282773, 76.966984],{icon: myIcon}).addTo(map).bindPopup('Старостина, 94');
        DG.marker([52.283093, 76.967141],{icon: myIcon}).addTo(map).bindPopup('Меладзе 32, корпус 1');
  
        }else{
            map = DG.map('map', {
            center: [52.283394,76.984141],
            zoom: 15,
            doubleClickZoom: false,
            boxZoom: false,
            zoomControl: false,
            fullscreenControl: false
        });

        var myIcon = DG.divIcon({className: 'my-div-icon', html: '<div style="background:red; width: auto; height: auto;"><svg width="37" height="51" viewBox="0 0 37 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5002 0.0834961C8.66391 0.0834961 0.708496 8.03891 0.708496 17.8752C0.708496 31.2189 18.5002 50.9168 18.5002 50.9168C18.5002 50.9168 36.2918 31.2189 36.2918 17.8752C36.2918 8.03891 28.3364 0.0834961 18.5002 0.0834961ZM18.5002 24.2293C14.9927 24.2293 12.146 21.3827 12.146 17.8752C12.146 14.3677 14.9927 11.521 18.5002 11.521C22.0077 11.521 24.8543 14.3677 24.8543 17.8752C24.8543 21.3827 22.0077 24.2293 18.5002 24.2293Z" fill="#009600"/></svg></div>'});

        DG.marker([52.288083, 76.967629],{icon: myIcon}).addTo(map).bindPopup('Проспект независимости, 29/4');
        DG.marker([52.287274, 76.969791],{icon: myIcon}).addTo(map).bindPopup('Пушкина, 115');
        DG.marker([52.282773, 76.966984],{icon: myIcon}).addTo(map).bindPopup('Старостина, 94');
        DG.marker([52.283093, 76.967141],{icon: myIcon}).addTo(map).bindPopup('Меладзе 32, корпус 1');

        };
    });
})