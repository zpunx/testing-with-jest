import React, { useState } from 'react';
import './Tab.css';

export default function Tab(props) {
    const currentActiveTab = props.tabs.find(tab => tab.active);
    const [activeTab, setActiveTab] = useState(currentActiveTab);

    function renderTabNavigation() {
        return props.tabs.map(tab => {
            return (
                <li
                    role="tab"
                    aria-selected={activeTab.name === tab.name}
                    key={tab.name}
                    className={`
                        tab--item 
                        ${ activeTab.name === tab.name ? 'tab--item__active' : '' }
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
            <ul className="tab--list">
                { renderTabNavigation() }
            </ul>
            <div role="tabpanel">
                { activeTab.content }
            </div>
        </div>
    );
}
