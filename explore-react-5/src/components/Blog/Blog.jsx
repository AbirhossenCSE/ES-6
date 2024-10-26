import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-5 p-5'>
            <img src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between p-2'>
                <div className='flex gap-3'>
                    <img className='w-14 rounded-full object-cover' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                    <button onClick={()=> handleAddToBookmark(blog)}> <FaBookmark></FaBookmark> </button>
                    
                </div>
            </div>
           <h2 className='text-4xl'>{title}</h2> 
           <p>
            {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
            }
           </p>
           <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-600 font-bold underline'>Mark as Read</button>
           
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;