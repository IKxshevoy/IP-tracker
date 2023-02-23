import L from 'leaflet';
export function addTileLayer(map) {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2lyYXBvaW50IiwiYSI6ImNsZWdkM21sMDA1cW4zenFsaHdtbXNnejcifQ.Ew5CxntbvjuKWLtUHqg1nw', {
    attribution: 'Challenge by <a href="https://github.com/IKxshevoy" target="_blank">Github</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);
}