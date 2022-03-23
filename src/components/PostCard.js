import { Component } from "react";
import { Link } from "react-router-dom";
import UserImage from "../image/User.png";

class PostCard extends Component {
    delete() {
        this.props.removePost(this.props.post.id);
    }
    render() {
        let post = this.props.post;
        return (
            <div className="card mb-2">
                <div className="d-flex justify-content-between">
                    <div className="col-2 ">
                        <img src={UserImage} alt="Post Img" width="75" />
                    </div>
                    <div className="col-5 align-self-center">
                        <h3>{post.title}</h3>
                        <h4>{post.desc}</h4>
                    </div>
                    <div className="col-5 align-self-center">
                        {/* <Link to={`/post/${post.id}`} > */}
                        <Link to={`/post/${post.id}`} state={post}>
                            <button className="btn btn-info">
                                <i className="fa fa-eye"></i>
                            </button>
                        </Link>
                        <Link to={`/post/edit/${post.id}`} state={post}>
                            <button className="btn btn-warning mx-2">
                                <i className="fa fa-edit"></i>
                            </button>
                        </Link>     
                        <button className="btn btn-danger" onClick={this.delete.bind(this)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;