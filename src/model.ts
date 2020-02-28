import { Marker, marker, LatLng, Popup, popup } from 'leaflet';
import { Config } from './config';

export class Model {
    id: number;
    title: string;
    images: {
        orig: string;
        min: string;
    };
    pos: {
        lat: number;
        lon: number;
    }
    
    constructor(props?: Partial<Model>) {
        if (props) {
            Object.assign(this, props);
        }
    }
    
    createMarkerPos(): number[] {
        return [this.pos.lat, this.pos.lon];
    }
    
    createMarker(): Marker {
        const pos = new LatLng(this.pos.lat, this.pos.lon);
        return marker(pos);
    }
    
    createPopup(): Popup {
        const p = popup();
        const imgUrl = this.getPreviewImageUrl(this.images.orig);
        p.setContent(`<img src="${imgUrl}"><span>${this.title}</span>`);
        return p;
    }
    
    protected getPreviewImageUrl(name: string): string {
        return Config.imagesPreviewUrl + '/' + name;
    }
}