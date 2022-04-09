import React from 'react';
import App from './App';
import {mount} from "@cypress/react";

it('renders learn react link', () => {
    mount(<App/>)
    cy.get('a').contains('Learn React')
})