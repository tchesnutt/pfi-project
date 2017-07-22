import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Doctor from './doctor';
import DoctorData from '../utils/doctors.json';


class Root extends React.Component {
  constructor(props){
    super(props);

    this.renderDocs = this.renderDocs.bind(this);
  }

  renderDocs(){
    return(
      <div>
        {this.props.doctors.doctors.map((doc, idx) => {
          return(<Doctor info={doc} key={idx}/>);
        })}
      </div>
    )
  }

  render() {
    return(
      <section className='main-page'>
        <Header/>
        <section className='doctor-list'>
          {this.renderDocs()}
        </section>
      </section>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root doctors={DoctorData}/>, document.getElementById('main'));
});
