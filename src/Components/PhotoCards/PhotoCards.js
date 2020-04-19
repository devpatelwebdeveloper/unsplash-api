import React from "react";
import "./PhotoCards.scss";

export default function PhotoCards({ photoList }) {
  return (
    <React.Fragment>
      {(photoList || []).map((ar) => {
        return (
          <div className="grid" key={ar.id}>
            <img
              src={ar.urls.small}
              alt={ar.alt_description}
              title={ar.alt_description}
            />
            <div className="grid__body">
              <div className="relative">
                <a
                  className="grid__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ar.urls.full}
                />
                <h1 className="grid__title">{ar.alt_description}</h1>
                <p className="grid__author">{ar.user.name}</p>
              </div>
              <div className="mt-auto">
                {ar.tags.map((tag, index) => {
                  return (
                    <span className="grid__tag" key={index}>
                      {tag.title}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
