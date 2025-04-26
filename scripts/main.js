let mapa;

function initMap() {
    const localizacaoCentral = { lat: -23.4774997, lng: -46.7182308 };
    const opcoesDoMapa = {
        center: localizacaoCentral,
        zoom: 12,
        mapTypeId: 'roadmap'
    };

    mapa = new google.maps.Map(document.getElementById('mapa'), opcoesDoMapa);

    const marcador = new google.maps.Marker({
        position: localizacaoCentral,
        map: mapa,
        title: 'Estamos aqui!'
    });
}

function loadMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.MAPS_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

loadMapScript();
