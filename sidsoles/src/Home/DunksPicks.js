import "./DunksPicks.css";
import Items from "../Shop/Items";
import ItemPreview from "./ItemPreview";

const DunksPicks = () => {
    return (
        <>
            <div className="parallax third">
                <h1 className="parallax-text">Yeezys</h1>
            </div>
            <div className="picks-div">
                <h1>Top Dunk Picks</h1>
                <div id="dunk-picks" className="picks columns">
                    {/* Filtered list with just image and title */}
                    <Items brand="Nike" limit={4} previewOnly={true} />
                </div>
            </div>
        </>
    );
};

export default DunksPicks;
