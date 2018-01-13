import React, {Component} from 'react';

class BladAPI extends Component {

    static callback(key) {
      console.log(key);
    }

    render() {
        return(
            <div >
                <iframe title="api" src="https://documenter.getpostman.com/view/727574/collection/7Lt6zX9"  width="100%" height="800px"></iframe>
            </div>
        )
    }
}

export default BladAPI
