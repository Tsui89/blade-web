import React,{Component} from 'react';
import Check from './Check'


class AMP2Hz extends Component {
    render () {
        return <Check postUrl={"http://127.0.0.1:8080/blade/mainAmplitude2Hz"}/>;
    }
    }

export default AMP2Hz;