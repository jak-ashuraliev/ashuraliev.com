import React from "react";
import "../../App.css";
import "../../components/Footer/Footer.css";

function Footer() {
  //social links
  let url_linkedin = "https://www.linkedin.com/in/jak-ashuraliev/";
  let url_github = "https://github.com/jak-ashuraliev";
  let url_behance = "https://www.behance.net/jak-ashuraliev";
  let url_codepen = "https://codepen.io/jak-ashuraliev/pens/";

  return (
    <footer className="text-center">
      <div className="social-icons">
        <a className="icon-linkedin" href={url_linkedin} target="blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a className="icon-github" href={url_github} target="blank">
          <i className="fab fa-github-square"></i>
        </a>
        <a className="icon-behance" href={url_behance} target="blank">
          <i className="fab fa-behance-square"></i>
        </a>
        <a className="icon-codepen" href={url_codepen} target="blank">
          <i className="fab fa-codepen"></i>
        </a>
      </div>
      <small>
        &copy; 2020 www.ashuraliev.com | Made with{" "}
        <i className="fas fa-heart mr-1"></i>
        in Seattle, WA by Jak Ashuraliev.
      </small>
    </footer>
  );
}

export default Footer;
