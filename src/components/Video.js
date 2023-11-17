import "./Video.css"

function Video({videoimage, heading, para}) {
    return (
        <div className=" video-box video-box-align">
            <div className="video-box-img">
                <img src={videoimage} alt="v1"></img>
            </div>
            <div className="video-box-info">
                <h4>{heading}</h4>
                <div className="video-box-para">
                    <p>{para}</p>
                </div>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Video;