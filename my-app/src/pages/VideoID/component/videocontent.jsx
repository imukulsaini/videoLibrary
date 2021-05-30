
import { AiFillLike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

export function VideoHead()
{
    return (
        
        <>
        <span className="video-content__name">
Basic how to ride your bicycle comfortable Basic how to ride
your bicycle conformable
</span>

        <div className="video-content__container">

            <div className="video-content__info">
<span className="video-card__views">53k views</span>●
<span className="video-card__date">2 weeks ago</span>
</div>

            <div className="video-content__menu">
                <ul className="video-content__menu-list">
                    <li className="video-content__menu-item">
                        <div className="video-content__icon">
                            <AiFillLike className="icon" />
                            <span className="video-content__icon-name">LIKE</span>
                        </div>
                    </li>

                    <li className="video-content__menu-item">
                        <div className="video-content__icon">
                            <MdPlaylistAdd className="icon" />
                            <span className="video-content__icon-name">SAVE</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        

</>

    )
}