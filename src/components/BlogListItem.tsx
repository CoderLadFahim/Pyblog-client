import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

// @ts-ignore
function BlogListItem({blog, deleteHandler}) {
	const handleDelete = () => {
		axios.delete(`/blogs/${blog.id}`)
			.then(deleteHandler)
			.catch((e) => console.log(e))
	}

	const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/compose/${blog.id}`)
    }

	return (
		<div className="flex items-center justify-between pb-3 border-gray-200 border-b">
			<Link
				className="blog-title cursor-pointer text-slate-700"
				to={`/view/${blog.id}`}
			>
				{blog.title}
			</Link>
			<div className="blog-control space-x-4">
				<button className="px-3 py-1 text-xs text-white bg-green-500 rounded" onClick={handleClick}>
					Edit
				</button>
				<button
					className="px-3 py-1 text-xs text-white bg-red-500 rounded"
					onClick={handleDelete}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default BlogListItem
