import { ImGithub,ImTwitter } from "react-icons/im";

import "./footer.css";

export function Footer()
{
    return (
        <footer
        className="footer"
        style={{backgroundColor:"#1f1d2b"}}
        >
          <div className="callToAction" style={{ color: "white" }}>
            <a style={{ color: "white" }} href="####">
              {" "}
              Call : 464646464{" "}
            </a>
          </div>

          <div className="connectIntro">
            <span style={{ color: "white" }}>
              {" "}
              Made with ❤️ by <b> Mukul Saini </b>
            </span>

            <div className="socialLinks">
              <a href="###">
                {" "}

                <ImGithub
                style={{ color: "white" }}
                />
              </a>

              <a href="###">
                {" "}
                <ImTwitter style={{ color: "white" }} />{" "}
              </a>
            </div>
          </div>
        </footer>

    )
}