import {useState} from 'react'

function BlogComment({
	comment,
	commentDeleterFunction,
	commentUpdaterFunction,
}: any) {
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [commentText, setCommentText] = useState<string>(comment.body)

	const handleKeyUp = (e) => {
		if (e.keyCode !== 13) return setCommentText(() => e.target.value)
		setIsEditing(() => false)

		commentUpdaterFunction(comment.id, commentText)
	}

	return (
		<div className="text-gray-600 border-b pb-2">
			{!isEditing ? (
				<>
					<p className="text-gray-800">{comment.body}</p>
					<div className="space-x-4 text-xs mt-2">
						<span
							className="text-green-500 hover:underline cursor-pointer"
							onClick={() => setIsEditing(() => true)}
						>
							Edit
						</span>
						<span
							className="text-red-500 hover:underline cursor-pointer"
							onClick={() =>
								commentDeleterFunction(comment.id)
							}
						>
							Delete
						</span>
					</div>
				</>
			) : (
				<input
					type="text"
					value={commentText}
					onChange={handleKeyUp}
					onKeyUp={handleKeyUp}
					className="border p-2 mt-4 rounded w-full"
					placeholder="Enter comment"
				/>
			)}
		</div>
	)
}

export default BlogComment
