import React from 'react';
import './work-details.component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default class WorkDetails extends React.Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close() {
        this.props.closeSelectedWork();
    }


    render() {
        return (
            <div className="work-details">
                <img src={this.props.work.image} alt="work" className="work-image"/>
                <div className="work-data col">
                    <div className="work-header">{this.props.work.header}</div>
                    <div className="work-description">{this.props.work.description}</div>
                    <FontAwesomeIcon icon={faTimesCircle} 
                                     onClick={this.close} 
                                     className="close-selected" />
                </div>
            </div>
        )
    }
}