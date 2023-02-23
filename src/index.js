import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {addTileLayer,validateIp, getAddress} from './helpers';
import icon from '../images/icon-location.svg';

const btn = document.querySelector('.search-bar__btn');
const ipInput = document.querySelector('.search-bar__input');
const ipAddress = document.querySelector('#ip');
const location = document.querySelector('#location');
const timezone = document.querySelector('#timezone');
const isp = document.querySelector('#isp');
const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
    center: [40.7128, -74.0059],
    zoom: 14,
});
const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
})
addTileLayer(map);
L.marker([40.7128, -74.0059], {icon: markerIcon}).addTo(map);


btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleEnter);

function getData() {
    if(validateIp(ipInput.value)) {
        getAddress(ipInput.value)
        .then(data => setData(data));
    }
}

function handleEnter(event) {
    if(event.key === 'Enter') {
        getData();
    }
}

function setData(data) {
    ipAddress.innerText = data.ip;
    location.innerText = `${data.location.country}\n${data.location.region}\n${data.location.city}`;
    timezone.innerText = data.location.timezone;
    isp.innerText = data.isp;
    map.setView([data.location.lat,data.location.lng]);
    L.marker([data.location.lat,data.location.lng], {icon: markerIcon}).addTo(map);
    
}