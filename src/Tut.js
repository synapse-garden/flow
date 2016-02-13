import React, { Component } from 'react';

export default class Tut extends Component {
  render() {
    return (
        <div>
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        </div>
    );
  }
}

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am COMMENTBOX.
                <GrumpButton />
            </div>
        );
    }
});


var GrumpButton = React.createClass({
    getInitialState: function() {
        return {numGrumps: 0, grumpText: ' Grumps'};
    },
    handleSubmit: function(click) {
        click.preventDefault();
        this.setState({
            numGrumps: this.state.numGrumps + 1,
            grumpText: (this.state.numGrumps == 1) ? ' Grump' : ' Grumps'
        });
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button className="grumpButton">
                {this.state.numGrumps}
                {this.state.grumpText}
                </button>
            </form>
        );
    }
});
