import { createContext, useState, useRef } from '@wordpress/element'

const MapContext = createContext()

const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)

  return (
    <MapContext.Provider value={{ map, setMap, mapContainer }}>
      {children}
    </MapContext.Provider>
  )
}

export { MapContext, MapProvider }