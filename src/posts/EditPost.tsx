import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editPost } from "./postSlice";
import { IPost } from "../types/post";
import { RootState } from "../store";
import styled from "styled-components";

const EditPost = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const posts = useSelector((state: RootState) => state.posts);
	const navigate = useNavigate();
	const existingPost = posts.filter((post: IPost) => post.id === Number(params.id));
	const { title, text } = existingPost[0];
	const [values, setValues] = useState({
		title,
		text,
	});

	const handleEditPost = () => {
		dispatch(
			editPost({
				id: params.id,
				title: values.title,
				text: values.text,
			}),
		);
		setValues({ title: "", text: "" });
		navigate("/");
	};
	return (
		<EditPostBox>
			<div>Title</div>
			<input
				value={values.title}
				placeholder="Title"
				onChange={(e) => setValues({ ...values, title: e.target.value })}
			/>
			<br />
			<div>Text</div>
			<input
				value={values.text}
				placeholder="Text"
				onChange={(e) => setValues({ ...values, text: e.target.value })}
			/>
			<button style={{ marginTop: "15px" }} onClick={handleEditPost}>
				Edit
			</button>
		</EditPostBox>
	);
};

export default EditPost;

const EditPostBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
