// ItemPreview.js
import "./ItemPreview.css";

const ItemPreview = ({ title, image }) => {
    return (
        <div className="item-preview">
            <img
                className="preview-image"
                src={`${process.env.PUBLIC_URL}/images/${image}`}
                alt={title}
            />
            <h2 className="preview-title">{title}</h2>
        </div>
    );
};

export default ItemPreview;
