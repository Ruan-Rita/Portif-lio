import React, { useState} from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home'

const Router : React.FC = () => (
    // const {values, setValue } = useState();
    <BrowserRouter>
        <Switch >
            <Layout>
                <Route path="/" exact component={Home} />
                <Route path="/meus-talentos" exact component={Home} />
                <Route path="/sobre" exact component={About} />
            </Layout>
        </Switch>
    </BrowserRouter>
)


export default Router;