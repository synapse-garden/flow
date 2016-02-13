import React, { Component } from 'react';

export default class Sandbox extends Component {
    render() {
        return (
            <div>
                <GrumpCounter />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
            </div>
        );
    }
}

var GrumpCounter = React.createClass({
    getInitialState: function() {
        return {totalGrumps: 0 };
    },
    render: function() {
        return (
            <div className="grumpCounter">
                Total Grumps: {this.state.totalGrumps}
            </div>
        );
    }
});

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
            //Evals to true at 2 instead of 1... ? unsure why
            grumpText: (this.state.numGrumps == 1) ? ' Grump' : ' Grumps'
        });
        GrumpCounter.setState({totalGrumps: GrumpCounter.totalGrumps + 1});
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
