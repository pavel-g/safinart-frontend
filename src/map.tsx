import * as React from 'react';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import { Model } from './model';
import Axios from 'axios';
import { mapParams, MapParams } from './map-params';
import { Config } from './config';

export const DivMap = styled.div`
    height: 100%;
    width: 100%;
`;

// BEGIN fix leaflet+webpack
// (c) https://github.com/PaulLeCam/react-leaflet/issues/255
delete Leaflet.Icon.Default.prototype['_getIconUrl'];

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
// END fix leaflet+webpack

export const MAP_ID = 'safinart-map';

export class Map extends React.Component {
    
    map?: Leaflet.Map = null;
    
    osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    osm?: Leaflet.TileLayer = null;
    
    data: Model[] = [];
    
    mapParams: MapParams;
    
    constructor(props) {
        super(props);
        this.mapParams = mapParams;
    }
    
    async initLeaflet(): Promise<void> {
        if (!this.map) {
            this.map = Leaflet.map(MAP_ID);
        }
        
        if (!this.osm) {
            this.osm = new Leaflet.TileLayer(this.osmUrl, {attribution: this.osmAttrib});
            this.map.setView(this.mapParams.pos, this.mapParams.zoom);
            this.map.addLayer(this.osm);
        }
        
        this.initListeners();
        
        const data = await this.loadData();
        
        data.forEach((item) => {
            const marker = item.createMarker();
            marker.addTo(this.map);
            marker.bindPopup(item.createPopup());
        })
    }
    
    async loadData(): Promise<Model[]> {
        if (this.data.length > 0) {
            return this.data;
        }
        const resp = await Axios.get(this.getUrl());
        this.data = resp.data.map((item) => new Model(item));
        return this.data;
    }
    
    render() {
        setTimeout(this.initLeaflet.bind(this), 1000);
        return (
            <DivMap id={MAP_ID}></DivMap>
        );
    }
    
    protected initListeners(): void {
        this.map.on('zoomend', () => {
            this.mapParams.zoom = this.map.getZoom();
        });
        this.map.on('moveend', () => {
            this.mapParams.pos = this.map.getCenter();
        });
    }
    
    protected getUrl(): string {
        return Config.apiUrl + '/list';
    }
    
}