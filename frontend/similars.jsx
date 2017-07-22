import React from 'react';


export default class Similars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      slide: 0
    };

    this.renderSimilars = this.renderSimilars.bind(this);
  }

  handleSelect(num){
    this.setState({slide: num});
  }

  renderSimilars(){
    if(this.state.slide === 0){
      return(
        <div>
          {this.props.similars.location.map((doc, idx) => (
            <div className='similar-doc' key={idx}>
              <h4>{doc.name}</h4>
              <h4>{doc.location}</h4>
              <h4>{doc.score}</h4>
            </div>
          ))};
        </div>
      )
    } else {
      return(
        <div>
          {this.props.similars.specialty.map((doc, idx) => (
            <div className='similar-doc' key={idx}>
              <h4>{doc.name}</h4>
              <h4>{doc.location}</h4>
              <h4>{doc.score}</h4>
            </div>
          ))};
        </div>
      )
    }
  }

  render(){
    return(
      <section className='similars'>
        <h4 className='similars-title' onClick={() => this.handleSelect(0)}>
          By Location
        </h4>
        <h4 className='similars-title' onClick={() => this.handleSelect(1)}>
          By Specialty
        </h4>
        {this.renderSimilars()}
      </section>
    )
  }
}
