import React from 'react';
import './css/MapView.scss';
import Map from './components/Map';
import AssetDownloadButtons from './components/AssetDownloadButtons';

class MapView extends React.Component {
  static defaultProps = {
    tiles: []
  };

  static propTypes = {
      tiles: React.PropTypes.array.isRequired // tiles.json list
  };

  constructor(props){
    super(props);

    this.state = {
      opacity: 100
    };

    this.updateOpacity = this.updateOpacity.bind(this);
  }

  updateOpacity(evt) {
    this.setState({
      opacity: parseFloat(evt.target.value),
    });
  }

  render(){
    const { opacity } = this.state;

    return (<div className="map-view">
        <Map tiles={this.props.tiles} showBackground={true} opacity={opacity}/>
        <div className="row controls">
          <div className="col-md-12 text-right">
            Orthophotos opacity: <input type="range" step="1" value={opacity} onChange={this.updateOpacity} />
          </div>
        </div>
      </div>);
  }
}

export default MapView;
