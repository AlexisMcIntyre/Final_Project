import React from 'react';


export default class TextBox extends React.Component {
    render() {
        return (
            <div className="textbox">
                <h1>{this.props.title}</h1>
                <h4>{this.props.date}</h4>
                <p>{this.props.content}</p>
            </div>
        );
    }
}