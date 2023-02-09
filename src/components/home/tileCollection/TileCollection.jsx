import React from 'react';
import collection1 from "../../../assets/tileCollection/collection1.png";
import collection2 from "../../../assets/tileCollection/collection2.png";
import collection3 from "../../../assets/tileCollection/collection3.png";
import collection4 from "../../../assets/tileCollection/collection4.png";
import collection5 from "../../../assets/tileCollection/collection5.png";
import "./tileCollection.scss";

function TileCollection(props) {
  const tiles = [
    {
      bg : collection1,
      type : "Сияние",
      brand : "Kerama Marazzi"
    },
    {
      bg : collection2,
      type : "Вестанвинд",
      brand : "LB-Ceramics"
    },
    {
      bg : collection3,
      type : "Rotterdam",
      brand : "Gracia Ceramica"
    },
    {
      bg : collection4,
      type : "Rane",
      brand : "Alma Ceramica"
    },
    {
      bg : collection5,
      type : "Гинардо",
      brand : "Kerama Marazzi"
    }
  ]
  return (
    <div className='tile_collection container-fluid'>
      <div className="row">
        <div className="col-12 col-xl-6">
          <div className="content_wrapper" 
          style={{ backgroundImage: `url(${tiles[0].bg})` }}
          >
            <div className="tile_type">{tiles[0].type}</div>
            <p>{tiles[0].brand}</p>
          </div>
        </div>
        <div className="col-12 col-xl-6">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-8">
              <div className="content_wrapper"
              style={{ backgroundImage: `url(${tiles[1].bg})` }}
              >
                <div className="tile_type">{tiles[1].type}</div>
                <p>{tiles[1].brand}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="content_wrapper"
              style={{ backgroundImage: `url(${tiles[2].bg})` }}
              >
                <div className="tile_type">{tiles[2].type}</div>
                <p>{tiles[2].brand}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="content_wrapper"
              style={{ backgroundImage: `url(${tiles[3].bg})` }}
              >
                <div className="tile_type">{tiles[3].type}</div>
                <p>{tiles[3].brand}</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-8">
              <div className="content_wrapper"
              style={{ backgroundImage: `url(${tiles[4].bg})` }}
              >
                <div className="tile_type">{tiles[4].type}</div>
                <p>{tiles[4].brand}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileCollection;