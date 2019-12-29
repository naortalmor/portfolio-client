import React from 'react';
import * as Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import MinimzedWork from './minimized-work/minimized-work.component';
import ScrollIndicator from './scroll-indicator/scroll-indicator.component';
import WorkDetails from './work-details/work-details.component';
import * as firebase from 'firebase';

export default class WorksContainer extends React.Component {
    worksMap = [];
    pagesCount;
    workDetailsComponent;

    constructor(props) {
        super(props);
        this.state = {
            activeIndicator: 0,
            workToDisplay: undefined
        }

        this.nextWorks = this.nextWorks.bind(this);
        this.prevWorks = this.prevWorks.bind(this);
        this.displaySelectedWork = this.displaySelectedWork.bind(this);
        this.closeSelectedWork = this.closeSelectedWork.bind(this);
    }

    displaySelectedWork(work) {
        this.setState((prev) => ({
            workToDisplay: work
        }))

        Scroll.animateScroll.scrollToBottom();
    }

    closeSelectedWork() {
        Scroll.animateScroll.scrollToTop();
        setTimeout(() => {
            this.setState({
                workToDisplay: undefined
            })
        }, 1000);
    }

    componentWillMount() {
        this.pagesCount = Math.round(this.props.allWorks.length / this.props.maxWorks);
        for (let index = 0; index < this.props.allWorks.length ; index+=this.props.maxWorks) {
            this.worksMap.push(this.props.allWorks.slice(index, index+this.props.maxWorks));
        }

        const database = firebase.database();
        let allWorks = database.ref('/works');
        allWorks.once('value').then(allWorks => {
            this.allWorks = [...this.allWorks, ...allWorks]
        })
    }

    nextWorks() {
        this.setState((prev) => {
            return {
                activeIndicator: prev.activeIndicator === this.pagesCount -1 ? 0 : prev.activeIndicator + 1
            }
        })
    }

    prevWorks() {
        this.setState((prev) => {
            return {
                activeIndicator: prev.activeIndicator === 0 ? this.pagesCount - 1 : prev.activeIndicator - 1
            }
        })
    }

    render() {
        const images = this.worksMap[this.state.activeIndicator].map((work) => 
        <MinimzedWork work={work} 
            key={work.id} 
            displayWork={() => this.displaySelectedWork(work)}/>
        );
        
        return (
            <div className="col container">
                <ScrollIndicator indicatorsCount={this.pagesCount} activeIndicator={this.state.activeIndicator}/>
                <div className="images-container row">
                    <FontAwesomeIcon icon={faArrowCircleLeft} onClick={this.prevWorks} className="icon flx1"/>   
                    <div className="row ctr flx25">
                        {images}
                    </div> 
                    <FontAwesomeIcon icon={faArrowCircleRight} onClick={this.nextWorks} className="icon flx1" />
                </div>
                {this.state.workToDisplay ? 
                    <WorkDetails work={this.state.workToDisplay} 
                                closeSelectedWork={this.closeSelectedWork}/>
                    : ''}
            </div>
        )
    }
}