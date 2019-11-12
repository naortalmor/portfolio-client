import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import './minimized-work.component.css';

export default class MinimzedWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }

        this.in = this.in.bind(this);
        this.out = this.out.bind(this);
        this.onDisplayWork = this.onDisplayWork.bind(this);
    }

    in(e) {
        this.setState({
            isHover: true
        })
    }

    out(e) {
        this.setState({
            isHover: false
        })
    }

    onDisplayWork() {
        this.props.displayWork();
    }

    render() {
        return (
            <div className="single-img-container row"
                style={{backgroundImage: `url(${this.props.work.image})`}} 
                onMouseOver={this.in}
                onMouseLeave={this.out} >
                {this.state.isHover ? 
                    <div className="minimize-data-container">
                        <div className="all-data" style={{color: this.props.work.textColor ? this.props.work.textColor : ''}}>
                            <div className="work-data-header">{this.props.work.header}</div>
                            <div className="work-data-description">{this.props.work.description}</div>
                        </div>
                        <div className="drop-container" 
                             onClick={this.onDisplayWork} >
                            <FontAwesomeIcon icon={faSortDown} className="down-icon" /> 
                        </div>
                    </div>
                    : ''}
            </div>
        )
    }
}