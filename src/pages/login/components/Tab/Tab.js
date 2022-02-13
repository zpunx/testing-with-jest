import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

export default function Tab(props) {
    const currentActiveTab = props.tabs.find(tab => tab.active);
    const [activeTab, setActiveTab] = useState(currentActiveTab);

    function renderTabNavigation() {
        return props.tabs.map(tab => {
            const isActive = activeTab.name === tab.name;
            return (
                <li
                    role="tab"
                    aria-selected={isActive}
                    key={tab.name}
                    className={`
                        tab--item 
                        ${ isActive ? 'tab--item__active' : '' }
                    `}
                    onClick={() => setActiveTab(tab)}
                >
                    { tab.name }
                </li>
            );
        });
    }

    return (
        <div>
            <ul role="tablist" className="tab--list">
                { renderTabNavigation() }
            </ul>
            <div role="tabpanel">
                { activeTab.content }
            </div>
        </div>
    );
}

Tab.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            content: PropTypes.element.isRequired,
            active: PropTypes.bool,
        })
    ).isRequired,
}
