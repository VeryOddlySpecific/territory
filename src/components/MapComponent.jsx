import { useEffect, useContext } from '@wordpress/element'
import { MapContext } from '../context/Context'

const MapComponent = () => {

    const { mapRef } = useContext(MapContext)

    useEffect(() => {
        mapRef.current = L.map('map-component', {
            center: [39.8283, -98.5795],
            zoom: 4,
            zoomControl: false,
            maxBounds: [
                [49.3849, -66.8859],
                [24.3963, -124.8489]
            ]
        })
    }, [])

    return (
        <div id="map-component" style={{ height: '750px' }}></div>
    )

}

export default MapComponent