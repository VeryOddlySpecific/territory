import { MapProvider } from './context/Context'
import Layout from './Layout'

const App = () => {
    return (
        <MapProvider>
            <Layout />
        </MapProvider>
    )
}

export default App