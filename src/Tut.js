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
            </div>
        );
    }
});
