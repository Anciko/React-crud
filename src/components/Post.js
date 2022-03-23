import { Component } from "react";
import { Link } from "react-router-dom";

import PostCard from "./PostCard";

class Post extends Component {

   removePostHandler(id) {
      this.props.deletePost(id);
   }

   render() {
       return(
          <div>
             <h1 className="text-center mb-3 text-info">Posts</h1>

             <Link to="/add">
                <button className="btn btn-info btn-sm text-white mb-2">Add New Post <i className="fa fa-plus"></i></button>
             </Link>
            {
               this.props.posts.map(post => <PostCard key={post.id} post={post} removePost={this.removePostHandler.bind(this)} /> )
            }
          </div>     
       )
   }
}


export default Post;