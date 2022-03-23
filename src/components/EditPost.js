import { Component } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

class EditPost extends Component {
    constructor(props) {
        super(props);
        let post = this.props.location.state;
        this.state = {
            id : post.id,
            title : post.title,
            desc : post.desc
        }
    }

    updatePost(e) {
        e.preventDefault();
        this.props.updatePost(this.state);
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="card p-3 bg-dark text-white">
                <Link to="/" >Back</Link>
                <h2>Edit Post</h2>
                <form onSubmit={this.updatePost.bind(this)}>

                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">Post Title</label>
                        <input type="text" className="form-control rounded-0" id="title"
                            onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="desc" className="form-label">Post description</label>
                        <input type="text" className="form-control rounded-0" id="desc"
                            onChange={(e) => this.setState({ desc: e.target.value })} value={this.state.desc}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary bnt-sm float-end mb-2">Update</button>
                </form>
            </div>
        )
    }
}

export default (props) => {
    let navigator = useNavigate();
    let location = useLocation();

    return <EditPost {...props} navigate={navigator} location={location} />
}