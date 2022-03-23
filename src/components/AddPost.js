import React,{ Component } from "react";
import { useNavigate, Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';

class AddPost extends Component {
    state = {
        title : "",
        desc : ""
    }
    addPost = (e) => {
        e.preventDefault();
        this.props.addPost({id: uuid(), ...this.state});
        this.setState({
            title : "",
            desc : ""
        });
        this.props.navigate("/");
    }

    render() {
        return(
            <div className="card p-3 bg-dark text-white">
                <Link to="/" >Back</Link>
                <h2>Add New Post</h2>
                <form onSubmit={this.addPost}>
                    
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">Post Title</label>
                        <input type="text" className="form-control rounded-0" id="title" 
                            onChange={(e) => this.setState({title : e.target.value})} value={this.state.title} 
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="desc" className="form-label">Post description</label>
                        <input type="text" className="form-control rounded-0" id="desc" 
                            onChange={(e) => this.setState({desc : e.target.value})} value={this.state.desc}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary bnt-sm float-end mb-2">ADD</button>
                </form>
            </div>
        )
    }
}

export default (props) => {
    const navigator = useNavigate();
    return <AddPost {...props} navigate={navigator} />

}
   