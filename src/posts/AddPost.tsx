import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "./postSlice";

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
		<div>
			<input
				value={values.title}
				onChange={(e) => setValues({ ...values, title: e.target.value })}
			/>
			<br />
			<input value={values.text} onChange={(e) => setValues({ ...values, text: e.target.value })} />
			<button onClick={handleAddPost}>Submit</button>
		</div>
	);
};

export default AddPost;
