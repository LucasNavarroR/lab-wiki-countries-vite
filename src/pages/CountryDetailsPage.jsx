import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    getData();
  }, [params.countryId]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryId}`
      );
      console.log(response);
      setCountryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (countryDetails === null || countryDetails === undefined) {
    return <h3>... buscando Info</h3>;
  }

  return (
    <div>

      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</h3>

      <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`} alt="flag" />
      <p>{countryDetails.name.common}</p>
      <p>Capital: {countryDetails.capital}</p>
      <p>Area: {countryDetails.area} km</p>
      
      <p>Borders:</p> {countryDetails.borders.map((eachBorder)=> {
       
      return (
        <div key={eachBorder}>
      <Link  to={`/${eachBorder}`}>{eachBorder}</Link>
      <br />
      
      </div>
      )
      
      })}
      

    </div>
  );
}
export default CountryDetails;
