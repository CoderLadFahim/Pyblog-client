import {useState} from 'react'
import {Edit, Trash} from 'react-feather'

function BlogComment({
	comment,
	commentDeleterFunction,
	commentUpdaterFunction,
}: any) {
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [commentText, setCommentText] = useState<string>(comment.body)

	const handleCommentUpdate = () => {
		commentUpdaterFunction(comment.id, commentText)
		    .then(() => {
		        setIsEditing(false)
		})
	}

	return (
		<div className="text-gray-600 border-gray-600 pb-2">
			{!isEditing ? (
				<>
					<div className="flex items-start justify-between pt-2 pb-12 px-3 bg-slate-700 rounded transition shadow-lg">
						<p className="blog-title text-gray-200 w-11/12">
							{comment.body}
						</p>
						<div className="blog-control space-x-4 mt-1">
							<button
								className="text-xs transition text-gray-400 hover:text-green-400 rounded"
								onClick={() => {
								    setIsEditing(() => true)
								    setCommentText(() => comment.body)
								}}
							>
								<Edit size={16} />
							</button>
							<button
								className="text-xs transition text-gray-400 hover:text-red-400 rounded"
								onClick={() =>
									commentDeleterFunction(comment.id)
								}
							>
								<Trash size={16} />
							</button>
						</div>
					</div>
				</>
			) : (
				<div className="comment-input-wrapper">
					<textarea
						value={commentText}
						onChange={(e) => setCommentText(() => e.target.value)}
						className="mt-4 w-full p-2 rounded bg-slate-700 outline-none text-gray-200"
						placeholder="Enter comment"
					></textarea>
					<div className="blog-control space-x-4 mt-3">
						<button
							className="custom-btn bg-green-500 text-white text-xs font-bold"
							onClick={handleCommentUpdate}
						>
							Save
						</button>
						<button
							className="custom-btn bg-gray-700 text-white text-xs font-bold"
							onClick={() => setIsEditing(() => false)}
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default BlogComment
