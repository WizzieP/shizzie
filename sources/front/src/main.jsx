import './css/bootstrap.min.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Game from './game.jsx';
import Town from './town.jsx';
import Character from './character.jsx';


render((
    <Router>
        <Route path="/" component={Game}>
            <IndexRoute component={Character} />
            <Route path="town" component={Town} />
            <Route path="character" component={Character} />
        </Route>
    </Router>
    ), document.getElementById('root'));