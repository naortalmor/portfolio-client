import React from 'react';

export default class ScrollIndicator extends React.Component {
    render() {
        let spans = [];
        for (let index = 0; index < this.props.indicatorsCount; index++) {
            spans.push(<span key={index} 
                className={`scroll-indicator ${this.props.activeIndicator === index ? 'activeIndicator' : ''}`}></span>);
        }
        return (
            <div className="row scroll">
                {spans}
            </div>
        )
    }
}