import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home'
const Router : React.FC = () => (
    <BrowserRouter>
        <Switch >
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/meus-talentos" exact component={Home} />
            </Layout>
        </Switch>
    </BrowserRouter>
)


export default Router;