import React, { Component } from 'react';
import {connect} from 'react-redux';


class Story extends Component {
    render() {
        return (
            <div className="Story">
                {this.props.story}
      </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        story: state.story
    }
}

export default connect(mapStateToProps, null)(Story);
