import React from 'react';

class FORM extends React.Component {
  render(){
    return (
      <div id="form">
        <form onSubmit={this.props.api_get}>
          <input type="text" placeholder="Город" name="city"/><br/>
          <button class="btn btn-primary">Узнать погоду</button>
        </form>
      </div>
    );
  }
}

export default FORM;
