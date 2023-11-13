import axios from 'axios'
import BlogListItem from '../components/BlogListItem'
import {useEffect, useState} from 'react'
import {IBlog} from '../types/interfaces'
import { Link } from 'react-router-dom'

function BlogListDisplay() {
	const [blogs, setBlogs] = useState<IBlog[]>([])

	useEffect(() => {
		fetchBlogs()
	}, [])

	const fetchBlogs = () => {
		axios.get('/blogs')
			.then(({data}) => setBlogs(data))
			.catch((e) => console.log(e))
	}

	const handleDelete = () => {
		fetchBlogs()
	}

	return (
		<>
			<div className="wrapper mx-24 mt-12">
				<div className="mb-14 pb-2 border-b border-gray-300 flex items-baseline justify-between">
					<h2 className="text-3xl text-sky-500">Blogs</h2>
					<Link
						to="/compose"
						className="text-sm text-gray-400 hover:text-emerald-400"
					>
						+ Create a new blog
					</Link>
				</div>
				<div className="blog-list-display space-y-5">
					{blogs.length
						? blogs.map((blog) => (
								<BlogListItem
									key={blog.id}
									blog={blog}
									deleteHandler={handleDelete}
								/>
						  ))
						: 'No blogs to show'}
				</div>
			</div>
		</>
	)
}

export default BlogListDisplay
