import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "./postSlice";
import { IPost } from "../types/post";
import { RootState } from "../store";
import styled from "styled-components";

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.posts);
	const handleRemovePost = (id: number) => {
		dispatch(deletePost({ id }));
	};

	return (
		<PostsBox>
			<Link to="/add-post">
				<button>Add Post</button>
			</Link>
			<div style={{ marginTop: "20px" }}>
				{posts.length ? (
					posts.map((post: IPost) => (
						<div key={post.id}>
							<div>
								<h3>Title: {post.title}</h3>
								<span>{post.text}</span>
							</div>
							<Buttons>
								<Link to={`edit-post/${post.id}`}>
									<button>edit</button>
								</Link>
								<button onClick={() => handleRemovePost(post.id)}>delete</button>
							</Buttons>
						</div>
					))
				) : (
					<p>No Post</p>
				)}
			</div>
		</PostsBox>
	);
};

export default PostList;

const PostsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Buttons = styled.div`
	display: flex;
	justify-content: end;
	margin: 10px 0 50px 0;
`;
