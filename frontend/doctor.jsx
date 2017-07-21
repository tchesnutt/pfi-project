import React from 'react';


class Doctor extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expanded: false
    };

    this.renderArrow = this.renderArrow.bind(this);
    this.handleArrowClick = this.handleArrowClick.bind(this);
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

  render() {
    return(
      <section className='doctor-row'>
        <div className='doctor-info'>
          <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6162463.jpg'/>
          <div className='info'>
            <div className='info-pair'>
                <h4> Name </h4>
                <h4> Henry The Doctor </h4>
            </div>
            <div className='info-pair'>
              <h4> Speciality </h4>
              <h4> Feet </h4>
            </div>
            <div className='info-pair'>
              <h4> Location </h4>
              <h4> San Jose </h4>
            </div>
            <div className='info-pair'>
              <h4> Score </h4>
              <h4> 2.3 </h4>
            </div>
          </div>
        </div>
        {this.renderArrow()}
      </section>
    )
  }
}

export default Doctor;
