import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    console.log(blog)
    const {title, cover , author_img , reading_time , posted_date } = blog;

    return (
        <div>
            <img className='w-full' src={cover} alt={`comver picture of title ${title}`} />
            <div className='flex justify-between m-3'>
                <div className='flex justify-end '>
                    <img src={author_img} alt={title} className="h-14" />
                    <div className='mx-6' >
                        <h3 className="text-2xl">
                            {title}
                        </h3>
                        <h5 className='text-left'>
                            {posted_date}
                        </h5>

                    </div>
                </div>
                <div className=''>
                    <p>{reading_time} minutes</p>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired 
}
export default Blog;