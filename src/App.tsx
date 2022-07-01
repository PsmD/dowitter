import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./posts/PostList";
import AddPost from "./posts/AddPost";
import EditPost from "./posts/EditPost";

function App() {
	return (
		<BrowserRouter>
			<h1>Dowitter</h1>
			<Routes>
				<Route path="/" element={<PostList />} />
				<Route path="/add-post" element={<AddPost />} />
				<Route path="/edit-post/:id" element={<EditPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
