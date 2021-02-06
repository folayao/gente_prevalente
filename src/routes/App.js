import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'

/* Contenedores */
import Home from '../containers/Home'



const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

