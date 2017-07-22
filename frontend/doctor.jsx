import React from 'react';
import Similars from './similars';


class Doctor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false
    };

    this.renderArrow = this.renderArrow.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.renderExpanded = this.renderExpanded.bind(this);
  }

  handleArrowClick(){
    if(this.state.expanded){
      this.setState({expanded: false});
    } else {
      this.setState({expanded: true});
    }
  }

  renderArrow(){
    if(this.state.expanded){
      return <i className="fa fa-angle-double-down"
                style={{fontSize: '36px'}}
                onClick={this.handleArrowClick}/>;
    } else {
      return <i className="fa fa-angle-double-up"
                style={{fontSize: '36px'}}
                onClick={this.handleArrowClick}/>;
    }
  }

  renderExpanded(){
    if(this.state.expanded){
      return (
        <section className='doctor-expanded'>
          <div className='description'>
            <h4>Description: {this.props.info.description}</h4>
          </div>
          <div>
            <Similars similars={this.props.info.similars}/>
          </div>
        </section>
      )
    } else {
      return <div/>
    }
  }

  render() {
    return(
      <section className='doctor-row'>
        <div className='doctor-row-info'>
          <div className='doctor-info'>
            <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6162463.jpg'/>
            <div className='info'>
              <div className='info-pair'>
                <h4> Name </h4>
                <h4> {this.props.info.name} </h4>
              </div>
              <div className='info-pair'>
                <h4> Speciality </h4>
                <h4> {this.props.info.specialty} </h4>
              </div>
              <div className='info-pair'>
                <h4> Location </h4>
                <h4> {this.props.info.location} </h4>
              </div>
              <div className='info-pair'>
                <h4> Score </h4>
                <h4> {this.props.info.score} </h4>
              </div>
            </div>
          </div>
          {this.renderArrow()}
        </div>
        {this.renderExpanded()}
      </section>
    )
  }
}

export default Doctor;
