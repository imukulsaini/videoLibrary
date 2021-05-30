import { useState } from "react";

export function ChannelContent() {
  const [showDes, setshowDes] = useState(false);

  return (
    <>
      <img
        className="video-content__avatar"
        alt=""
        src="https://pbs.twimg.com/profile_images/1372310949458112512/Isl5HmGT_400x400.jpg"
      />

      <div className="video-content__channel-info">
        <span className="video-content__channel-name">H5G1 MUSIC</span>

        <span className="video-content__channel-sub">10k subscribers</span>

        <span className={showDes ? "hideDes " : "video-content__video-des "}>
          {console.log(
            " hasdhlkhaskldhkhaskldhkalsdhklahsdklashkldhklasd",
            showDes
          )}
          In my opinion this is the best solution, but not everyone can use JS.
          Basically, the jQuery will check any .text element, and if there are
          more chars than the preset max var, it will cut the rest off and add
          an ellipsis. There are no caveats to this approach, however this code
          example is meant only to demonstrate the basic idea - I wouldn't use
          this in production without improving on it for a two reasons: 1) It
          will rewrite the inner html of .text elems. whether needed or not. 2)
          It does no test to check that the inner html has no nested elems - so
          you are relying a lot on the author to use the .text correctly.
        </span>

        <button onClick={() => setshowDes(!showDes)} className="show-btn">
          {showDes ? "Show Less" : "Show More"}
        </button>
      </div>

      <div className="video-content__button">
        <button className="subscribe-btn"> SUBSCRIBE</button>
      </div>
    </>
  );
}
