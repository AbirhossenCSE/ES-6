import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-200 ml-3">
            <h2 className="text-2xl">Reading Time: {readingTime}</h2>
           <h2 className="text-2xl">Bookmarks: {bookmarks.length} </h2> 
           {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};

export default Bookmarks;