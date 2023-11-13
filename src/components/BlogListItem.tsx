import axios from 'axios'
import { Edit, Trash } from 'react-feather'
import {Link, useNavigate} from 'react-router-dom'

// @ts-ignore
function BlogListItem({blog, deleteHandler, i}) {
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
		<div className={`flex items-baseline justify-between py-2 px-3 ${ i  % 2 === 0 ? 'bg-slate-700' : 'bg-gray-700' } rounded transition shadow-lg`}>
			<Link
				className={`blog-title cursor-pointer text-gray-200 hover:underline hover:text-sky-400`}
				to={`/view/${blog.id}`}
			>
				{blog.title}
			</Link>
			<div className="blog-control space-x-4 mt-1">
				<button className="text-xs transition text-gray-400 hover:text-green-400 rounded" onClick={handleClick}>
					<Edit size={16} />
				</button>
                <button className="text-xs transition text-gray-400 hover:text-red-400 rounded" onClick={handleDelete}>
					<Trash size={16} />
				</button>
			</div>
		</div>
	)
}

export default BlogListItem
