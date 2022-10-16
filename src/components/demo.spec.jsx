import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Demo } from './Demo';


describe('Test <Demo/> Component', () => {
    it('should initialize', async () => {
        const demoComponent = render(<Demo />)
        expect(demoComponent.getByText('Demo Component')).toBeInTheDocument()
    })
})