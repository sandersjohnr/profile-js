import React, {Component} from 'react';
import Weather from '../services/Weather';

export default class DataTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'empty'
    }
  }

  componentWillMount() {
    Weather.fetchWeatherData(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <h3>DataTest</h3>
        Data: {JSON.stringify(this.state.data)}

      </div>
    );
  }

}

DataTest.propTypes = Object.assign({});
