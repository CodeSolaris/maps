import { MAP_CONFIG } from "../config/map.config";
import type { Mappable } from "../types";

export class CustomMap {
	private googleMap: google.maps.Map;
	private markerLibrary: google.maps.MarkerLibrary | null = null;

	constructor(divId: string) {
		const mapElement = document.getElementById(divId);
		if (!mapElement) {
			throw new Error(`Element with id '${divId}' not found`);
		}

		this.googleMap = new google.maps.Map(mapElement, {
			zoom: MAP_CONFIG.DEFAULT_ZOOM,
			center: MAP_CONFIG.DEFAULT_CENTER,
			mapId: MAP_CONFIG.MAP_ID,
			restriction: MAP_CONFIG.RESTRICTION,
		});
	}

	async addMarker(mappable: Mappable): Promise<void> {
		if (!this.markerLibrary) {
			this.markerLibrary = (await google.maps.importLibrary(
				"marker",
			)) as google.maps.MarkerLibrary;
		}

		const { AdvancedMarkerElement } = this.markerLibrary;

		const marker = new AdvancedMarkerElement({
			map: this.googleMap,
			position: mappable.location,
		});

		const infoWindow = new google.maps.InfoWindow({
			content: mappable.markerContent(),
		});

		marker.addListener("click", () => {
			infoWindow.open(this.googleMap, marker);
		});
	}
}
