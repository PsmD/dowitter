import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost } from "./postSlice";
import { IPost } from "../types/post";

const EditPost = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const posts = useSelector((store: any) => store.posts);
	const navigate = useNavigate();
	const existingPost = posts.filter((post: IPost, params: any) => post.id === params.id);
	const { title, text } = existingPost[0];
	const [values, setValues] = useState({
		title,
		text,
	});

	const handleEditPost = () => {
		setValues({ title: "", text: "" });
		dispatch(
			editPost({
				id: params.id,
				title: values.title,
				text: values.text,
			}),
		);
		navigate("/");
	};

	return (
		<div>
			<input
				value={values.title}
				onChange={(e) => setValues({ ...values, title: e.target.value })}
			/>
			<br />
			<input value={values.text} onChange={(e) => setValues({ ...values, text: e.target.value })} />
			<button onClick={handleEditPost}>Edit</button>
		</div>
	);
};

export default EditPost;
