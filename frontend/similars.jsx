import React from 'react';


export default class Similars extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      slide: 0,
      loc: 'thick solid lightblue',
      spe: 'thick solid white'
    };

    this.renderSimilars = this.renderSimilars.bind(this);
  }

  handleSelect(num){
    if(num === 1){
      this.setState({slide: num, loc: 'thick solid white', spe: 'thick solid lightblue'});
    } else {
      this.setState({slide: num, spe: 'thick solid white', loc: 'thick solid lightblue'});
    }
  }

  renderSimilars(){
    if(this.state.slide === 0){
      return(
        <div>
          {this.props.similars.location.map((doc, idx) => (
            <div className='similar-doc' key={idx}>
                <h4>{doc.name}, {doc.location}, {doc.score}</h4>
            </div>
          ))}
        </div>
      )
    } else {
      return(
        <div>
          {this.props.similars.specialty.map((doc, idx) => (
            <div className='similar-doc' key={idx}>
              <h4>{doc.name}, {doc.location}, {doc.score}</h4>
            </div>
          ))}
        </div>
      )
    }
  }

  render(){
    return(
      <section className='similars'>
        <div>
          <div className='similars-title'>
            <h4 onClick={() => this.handleSelect(0)}
              style={{ borderBottom: `${this.state.loc}` }}>
              By Location
            </h4>
            <h4 onClick={() => this.handleSelect(1)}
              style={{ borderBottom: `${this.state.spe}` }}>
              By Specialty
            </h4>
          </div>
          <div className='similar-box'>
            {this.renderSimilars()}
          </div>
        </div>
      </section>
    )
  }
}
