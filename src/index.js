import { createRoot } from '@wordpress/element'
import App from './app/Provider'

const mapContainer = document.getElementById('map-container')

if (mapContainer) {
  createRoot(mapContainer).render(<App />)
}