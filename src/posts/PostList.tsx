import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "./postSlice";
import { IPost } from "../types/post";

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector((store: any) => store.posts);

	const handleRemovePost = (id: number) => {
		dispatch(deletePost({ id }));
	};

	return (
		<div>
			<Link to="/add-post">
				<button>Add Post</button>
			</Link>
			<div>
				{posts.length ? (
					posts.map((post: IPost) => (
						<div key={post.id}>
							<div>
								<h3>{post.title}</h3>
								<span>{post.text}</span>
							</div>
							<div>
								<Link to={`edit-post/${post.id}`}>
									<button>edit</button>
								</Link>
								<button onClick={() => handleRemovePost(post.id)}>delete</button>
							</div>
						</div>
					))
				) : (
					<p>No Post</p>
				)}
			</div>
		</div>
	);
};

export default PostList;
