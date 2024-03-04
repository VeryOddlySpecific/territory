import { MapContext } from "../context/Context"
import { useEffect, useState, useContext } from "@wordpress/element"

const MapProcessor = () => {

    const { mapRef } = useContext(MapContext)

    function initializeMap() {
        if (mapData.layers) {
            mapData.layers.forEach(layer => {
                L.tileLayer(layer.url, {
                    attribution: layer.attribution,
                    maxZoom: layer.maxZoom
                }).addTo(mapRef.current)
            })
        }
    }

    useEffect(() => {
        
        L.tileLayer('https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=GXUO6RDrkZ9BfFwKsVIr', {
            attribution: '<a href="https://www.maptiler.com/copyright/">MapTiler</a><a href="https://www.openstreemap.org/copyright">OpenStreetMap contributors</a>',
            maxZoom: 19
        }).addTo(mapRef.current)

        initializeMap()

    }, [])

}

export default MapProcessor