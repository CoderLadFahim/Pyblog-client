import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogListDisplay from './views/BlogListDisplay'
import BlogCreate from './views/BlogCreate'
import BlogView from './views/BlogView'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<BlogListDisplay />} />
					<Route path="/compose" element={<BlogCreate />} />
					<Route path="/compose/:id_of_the_blog_to_edit" element={<BlogCreate />} />
					<Route path="/view/:blog_id" element={<BlogView />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
