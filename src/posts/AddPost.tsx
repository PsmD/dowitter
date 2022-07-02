import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./postSlice";
import styled from "styled-components";

const AddPost = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [values, setValues] = useState({
		title: "",
		text: "",
	});

	const handleAddPost = () => {
		setValues({ title: "", text: "" });
		dispatch(
			addPost({
				id: Date.now(),
				title: values.title,
				text: values.text,
			}),
		);
		navigate("/");
	};

	return (
		<AddPostBox>
			<input
				value={values.title}
				placeholder="Title"
				onChange={(e) => setValues({ ...values, title: e.target.value })}
			/>
			<br />
			<input
				value={values.text}
				placeholder="Text"
				onChange={(e) => setValues({ ...values, text: e.target.value })}
			/>
			<button style={{ marginTop: "15px" }} onClick={handleAddPost}>
				Submit
			</button>
		</AddPostBox>
	);
};

export default AddPost;

const AddPostBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
