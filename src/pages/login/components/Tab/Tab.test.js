import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tab from './Tab';

describe('Tab', () => {
    let componentUnderTest;
    
    const mockedTabs = [
        { name: 'Foo', content: <div>foo</div>, active: true },
        { name: 'Bar', content: <div>bar</div> }
    ];

    beforeEach(() => componentUnderTest = render(<Tab tabs={mockedTabs} />) );
    afterEach(() => componentUnderTest.unmount() );

    it('should have an active tab', () => {
        const activeTab = screen.getByRole('tab', { name: /foo/i });
        expect(activeTab).toHaveAttribute('aria-selected', 'true');
    });

    it('should have all tabs rendered', () => {
        expect(screen.getAllByRole('tab').length).toEqual(mockedTabs.length);
    });

    it('should render the tab name', () => {
        expect(screen.getByRole('tab', { name: /foo/i }).textContent).toEqual(mockedTabs[0].name);
    });

    it('should render the tab content', () => {
        expect(screen.getByRole('tabpanel').innerHTML).toBeTruthy();
    });

    it('should change the active tab', () => {
        const targetTab = screen.getByRole('tab', { name: /bar/i });
        userEvent.click(targetTab);
        expect(targetTab).toHaveAttribute('aria-selected', "true");
    });

    it('should deactivate a tab', () => {
        const activeTab = screen.getByRole('tab', { name: /foo/i });
        const targetTab = screen.getByRole('tab', { name: /bar/i });
        userEvent.click(targetTab);
        expect(activeTab).toHaveAttribute('aria-selected', "false");
    });
});