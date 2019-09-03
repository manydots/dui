import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Button } from '../index.tsx';

describe('Button test', () => {
   it('exports modules correctly', () => {
     expect(Object.keys(Button)).toMatchSnapshot();
   });
})