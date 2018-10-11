import * as React from 'react';
import * as Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

export const DivMap = styled.div`
    height: 100%;
    width: 100%;
`;

export const MAP_ID = 'safinart-map';

export class Map extends React.Component {
    
    map?: Leaflet.Map = null;
    
    osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
    osm?: Leaflet.TileLayer = null;
    
    initLeaflet(): void {
        if (!this.map) {
            this.map = Leaflet.map(MAP_ID);
        }
        
        if (!this.osm) {
            this.osm = new Leaflet.TileLayer(this.osmUrl, {attribution: this.osmAttrib});
            this.map.setView(new Leaflet.LatLng(0, 0), 2);
            this.map.addLayer(this.osm);
        }
    }
    
    render() {
        setTimeout(this.initLeaflet.bind(this), 1000);
        return (
            <DivMap id={MAP_ID}></DivMap>
        );
    }
    
}