import React from 'react';

class WOut extends React.Component {
  render(){
    return (
      <div>
      { this.props.city &&
        <div id="wout" class="alert alert-success w-50">
        <h4>Погода в {this.props.city}: <br/>
            Температура(C): {(this.props.temp-273.15)} <br/>
            Ветер: {this.props.wind} <br/>
            Погода: {this.props.weather}
        </h4>
      </div>
      }
      </div>
    );
  }
}

export default WOut;
