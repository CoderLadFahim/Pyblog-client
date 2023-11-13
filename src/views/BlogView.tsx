import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import BlogComment from '../components/BlogComment.tsx'
import {IBlog, IBlogComment} from '../types/interfaces'
function BlogView() {
	const {blog_id} = useParams()
	const navigate = useNavigate()
	const [blog, setBlog] = useState<IBlog | null>(null)
	const [blogComments, setBlogComments] = useState<IBlogComment[]>([])
	const [comment, setComment] = useState<string>('')

	useEffect(() => {
		axios.get(`blogs/${blog_id}`).then((data) => setBlog(() => data.data))
		fetchComments()
	}, [])

	const fetchComments = () => {
		axios.get(`blogs/${blog_id}/comments`).then((data) =>
			setBlogComments(() => data.data)
		)
	}

	const deleteComment = (id) => {
		axios.delete(`/comments/${id}`).then(fetchComments).catch(console.log)
	}

	const postComment = (
		commentId?: string | number,
		updatedCommentBody?: string
	) => {
		const payload = {
			body: comment as string | undefined,
			blog_id: blog_id,
		}

		if (commentId) {
			payload.body = updatedCommentBody
		}

		axios[commentId ? 'put' : 'post'](
			commentId
				? `comments/${commentId}`
				: `/blogs/${blog_id}/comments`,
			payload
		)
			.then(() => {
				setComment('')
				fetchComments()
			})
			.catch((e) => console.log(e))
	}

	const handleCommentInputKeyUp = (e) => {
		if (e.keyCode === 13) return postComment()
		setComment(e.target.value)
	}

	return (
		<div className="wrapper mx-24 mt-12">
			<div className="mb-14 pb-2 border-b border-gray-300 flex items-baseline justify-between">
				<h2 className="text-3xl text-sky-500">{blog?.title}</h2>

				<div className="blog-control space-x-4">
					<button
						className="px-3 py-1 text-white bg-green-500 rounded"
						onClick={() => navigate(`/compose/${blog_id}`)}
					>
						Edit
					</button>
					<button
						className="px-3 py-1 text-white bg-gray-500 rounded"
						onClick={() => navigate('/')}
					>
						Back
					</button>
				</div>
			</div>

			<div className="blog-body-wrapper mb-28">
				<p className="text-gray-700">{blog?.body}</p>
			</div>

			<div className="comments-wrapper">
				<h3 className="mb-10 border-b border-gray-300">
					Comments ({blogComments.length})
				</h3>

				<div className="comment-input mt-10 flex flex-col mb-10">
					<input
						onKeyUp={handleCommentInputKeyUp}
						type="text"
						className="border p-2 text-sm mt-2 rounded w-full"
						placeholder="Enter comment"
					/>
				</div>

				<div className="space-y-7">
					{blogComments.length ? (
						blogComments.map((comment) => (
							<BlogComment
								comment={comment}
								key={comment.id}
								commentDeleterFunction={deleteComment}
								commentUpdaterFunction={postComment}
							/>
						))
					) : (
						<p className="text-xs text-gray-55e00">
							No comments to show
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default BlogView
