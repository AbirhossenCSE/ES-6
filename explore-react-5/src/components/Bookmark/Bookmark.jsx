
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-4 m-4 rounded-xl text-center bg-gray-300">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default Bookmark;