import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
    state = { comment : ''};

    handleChange = (e) => {
        const {value} = e.target
        this.setState({
            comment : value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault()

        this.props.saveComment(this.state.comment)

        this.setState({
            comment : ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button type="submit">Submit</button>
                        
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Posts</button>
            </div>
            
            
        )
    }
}

export default connect(null, actions)(CommentBox)