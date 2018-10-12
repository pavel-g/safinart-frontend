import * as Leaflet from 'leaflet';

export class MapParams {
    zoom?: number;
    pos?: Leaflet.LatLng;
}

export const mapParams = new MapParams();

mapParams.zoom = 2;
mapParams.pos = new Leaflet.LatLng(0, 0);