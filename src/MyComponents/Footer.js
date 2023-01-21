import React from "react";

export default function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <>
      <div className="bg-dark text-light">
        <ul className="list-group w-100 text-center py-5">
          <li>
            <a href="https://help.imdb.com/imdb" style={linkStyle}>
              Help
            </a>
          </li>
          <li>
            <a href="https://advertising.amazon.com/resources/ad-specs/imdb/" style={linkStyle}>
              Advertising
            </a>
          </li>
          <li>
            <a href="https://www.bing.com/maps?osid=804666ec-2b98-4fbc-b545-d272122652e9&cp=47.614894~-122.352363&lvl=15.74&pi=0&v=2&sV=2&form=S00027" style={linkStyle}>
              Address
            </a>
          </li>
          <li>
            <a href="https://www.imdb.com/privacy?ref_=ft_pvc" style={linkStyle}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://www.imdb.com/conditions?ref_=ft_cou" style={linkStyle}>
              T&C
            </a>
          </li>
        </ul>
        <h6 className="text-center p-4 m-0">
          Copyrights &copy; FilmFans Website.
        </h6>
      </div>
    </>
  );
}
