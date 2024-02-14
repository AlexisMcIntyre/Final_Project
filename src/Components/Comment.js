import React from 'react';


export default class Comment extends React.Component {
    render() {
        return (
                <div className="comment">
                    {this.props.username}--
                    {this.props.date}--
                    {this.props.content}
                </div>
        );
    }
}