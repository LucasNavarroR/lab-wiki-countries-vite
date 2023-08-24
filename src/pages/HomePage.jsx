import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCountrys, setAllCountrys] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response);
        setAllCountrys(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (allCountrys === null) {
    return <h3>... loading countrys</h3>;
  }

  return (
    <div>
      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
        WikiCountries: Your Guide to the World
      </h3>
      {allCountrys.map((eachCountry) => {
        return (
          <p key={eachCountry._id}>
            <Link to={`/${eachCountry.alpha3Code}`}> <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" width={50} />
              {eachCountry.name.common}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
export default HomePage;
