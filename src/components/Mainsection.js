import "./Mainsec.css"
import Mainheading from "./Mainheading.js";
import Mainpara from "./Mainpara.js";
import Video from "./Video.js";
import videoobj from "./resdata/data.js"

function Mainsection() {
    return (
        <div className="border main-section main-bg-image">
            Mainsection
            <Mainheading></Mainheading>
            <Mainpara></Mainpara>
            {
                videoobj.map(card =>
                    <Video
                        videoimage={card.videoimage}
                        heading={card.heading}
                        para={card.para}
                    ></Video>
                )
            }
        </div>
    )
}

export default Mainsection;