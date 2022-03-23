import { Component } from "react";
import { Link,useLocation } from "react-router-dom";
import UserImage from "../image/User.png"

class PostDetail extends Component {
    render() {
        let post = this.props.location.state;
        return (
            <>
                <h2 className="text-center text-info my-3">Post Detail</h2>
                <div className="card">
                    <img src={UserImage} className="img-fluid mx-auto" alt="User" width="100" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.desc}</p>
                        <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            </>

        )
    }
}

export default (props) => {
    const location = useLocation();
    return <PostDetail {...props} location={location} /> 
}