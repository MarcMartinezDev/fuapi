import React from "react";

const CodeExample = ({ request }) => {
  return (
    <code>
      <span>&#123;</span>
      <div className="flex flex-col ml-5">
        <span>id: {request ? request.id : 1}</span>
        <span>firstname: "{request ? request.firstname : "John"}"</span>
        <span>lastname: "{request ? request.lastname : "Garrix"}"</span>
        <span>username: "{request ? request.username : "jhongarrixs"}"</span>
        <span>password: "{request ? request.password : "er_opi56"}"</span>
        <span>age: {request ? request.age : 25}</span>
        <span>email: "{request ? request.email : "john@garrix.com"}"</span>
        <span>phone: "{request ? request.phone : "1234567890"}"</span>
        <span>direction: &#123;</span>
        <div className="flex flex-col ml-10">
          <span>
            address: "
            {request ? request.direction.address : "hollymolly street"}"
          </span>
          <span>city: "{request ? request.direction.city : "city_name"}"</span>
          <span>state: "{request ? request.direction.state : "Canada"}"</span>
          <span>zip: "{request ? request.direction.zip : "0098-0089"}"</span>
          <span>country: "{request ? request.direction.country : "EEUU"}"</span>
          <span>geolocation: &#123;</span>
          <div className="flex flex-col ml-10">
            <span>
              lat: {request ? request.direction.geolocation.lat : 23.99}
            </span>
            <span>
              lon: {request ? request.direction.geolocation.lon : 23.99}
            </span>
          </div>
          <span>&#125;</span>
        </div>
        <span>&#125;</span>
        <span>image: "{request ? request.image : "route_to_image"}"</span>
      </div>
      <span>&#125;</span>
    </code>
  );
};

export default CodeExample;
