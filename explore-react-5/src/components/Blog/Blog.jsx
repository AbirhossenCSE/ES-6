import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-3'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
           <h2 className='text-4xl'>{title}</h2> 
           {
                hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
           }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;