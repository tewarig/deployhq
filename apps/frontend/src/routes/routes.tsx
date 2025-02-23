import { Routes as RouterRoutes, Route } from 'react-router-dom'


const Routes = () => {
    return (
        <RouterRoutes>
            <Route path="/" element={<div> Home</div>} />
            <Route path="/about" element={<div> About</div>} />
        </RouterRoutes>
    )
}

export default Routes; 