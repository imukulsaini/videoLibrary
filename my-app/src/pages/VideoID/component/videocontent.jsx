
import { AiFillLike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

export function VideoHead({name,views,likes})
{
    return (
        
        <>
        <span className="video-content__name">
{name}
</span>

        <div className="video-content__container">

            <div className="video-content__info">
<span className="video-card__views">
    {views} views
    </span>●
<span className="video-card__date">2 weeks ago</span>
</div>

            <div className="video-content__menu">
                <ul className="video-content__menu-list">
                    <li className="video-content__menu-item">
                        <div className="video-content__icon">
                            <AiFillLike className="icon" />
                            <span className="video-content__icon-name">{likes} </span>
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