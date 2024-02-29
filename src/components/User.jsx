/* eslint-disable react/prop-types */

const User = ({ details, handleClick }) => {
  //const {details,handleClick} = props;

  const { id, name, email, phone, website, address } = details;
  const { city, zipcode, geo } = address;
  const { lng } = geo;

  const handleButtonClicked = (id) => {
    handleClick(id);
  };

  return (
    <div>
      <h1>User-id {id}</h1>
      <h2>User name : {name}</h2>
      <h3>user email : {email}</h3>
      <h4>Phone : {phone}</h4>
      <h5>website : {website}</h5>
      <h6>City : {city}</h6>
      <h5>zipcode : {zipcode}</h5>
      <h6>LAT : {geo.lat}</h6>
      <h5>LON : {lng}</h5>
      <button onClick={() => handleButtonClicked(id)}>click me</button>
    </div>
  );
};

export default User;
