import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BlogCreate() {
    const params = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const handleBlogCreate = () => {
        const payload = {title, body};
        let blogId;
        if (params.id_of_the_blog_to_edit) { 
            blogId = params.id_of_the_blog_to_edit 
        }
        axios[blogId ? 'put' : 'post'](`/blogs/${blogId ? blogId : ''}`, payload)
            .then(() => navigate('/'))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (!params.id_of_the_blog_to_edit) return;
        let blogId = params.id_of_the_blog_to_edit

        axios.get(`blogs/${blogId}`)
            .then(data => {
                setTitle(() => data.data.title)
                setBody(() => data.data.body)
            });
    }, [])


	return (
		<div className="wrapper mx-24 mt-12">
            <div className="mb-14 pb-2 border-b border-gray-600 flex items-baseline justify-between">
				<h2 className='text-3xl text-sky-500'>Create blog</h2>
			</div>

            <div className="space-y-10">
		        <div className="flex flex-col space-y-3">
		            <label htmlFor="title-input" className="text-xs text-gray-400">Title</label>
		            <input
		                type="text"
		                id="title-input"
		                name="title-input"
		                value={title}
		                className="p-2 rounded bg-slate-700 outline-none text-white"
		                placeholder="Enter title" 
		                onChange={(e) => setTitle(() => (e.target as HTMLInputElement).value)}
		            />
		        </div>

		        <div className="flex flex-col space-y-3">
		            <label htmlFor="body-input" className="text-xs text-gray-400">Body</label>
		            <textarea 
		                className="p-2 rounded bg-slate-700 outline-none text-white" 
		                rows={10} 
		                value={body}
		                name="body-input" 
		                placeholder="Enter body" 
		                id="body-input"
		                onChange={(e) => setBody(() => (e.target as HTMLTextAreaElement).value)}
		            ></textarea>
		        </div>

                <div className="space-x-4">
		            <button className="custom-btn text-white bg-green-500" onClick={handleBlogCreate}>
		                {params.id_of_the_blog_to_edit ? 'update' : 'create'}
		            </button>
                    <button className="custom-btn text-white bg-gray-600" onClick={() => navigate('/')}>
		                Cancel
		            </button>
                </div>
            </div>
	    </div> 
	)
}

export default BlogCreate
