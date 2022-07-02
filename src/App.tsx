import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PostList from "./posts/PostList";
import AddPost from "./posts/AddPost";
import EditPost from "./posts/EditPost";
import styled from "styled-components";

function App() {
	return (
		<BrowserRouter>
			<WebName>
				<Link to="/">Dowitter </Link>
			</WebName>
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/add-post" element={<AddPost />} />
				<Route path="/edit-post/:id" element={<EditPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

const WebName = styled.h1`
	text-align: center;
	a {
		text-decoration: none;
	}
`;
