import React from "react";

const CodeExample = ({ request }) => {
  return (
    <code>
      <span>&#123;</span>
      <div className="flex flex-col ml-5">
        <span>id: {request ? request.id : 1}</span>
        <span>firstname: "{request ? request.firstname : "John"}"</span>
        <span>lastname: "{request ? request.lastname : "Smith"}"</span>
        <span>username: "{request ? request.username : "Jsmith"}"</span>
        <span>password: "{request ? request.password : "xrdsm345"}"</span>
        <span>age: {request ? request.age : 32}</span>
        <span>email: "{request ? request.email : "Jsmith@example.com"}"</span>
        <span>phone: "{request ? request.phone : "+123 900009009"}"</span>
        <span>direction: &#123;</span>
        <div className="flex flex-col ml-10">
          <span>
            address: "
            {request ? request.direction.address : "64218 Grayson Drivet"}"
          </span>
          <span>
            city: "{request ? request.direction.city : "North Wilfred"}"
          </span>
          <span>
            state: "{request ? request.direction.state : "North Carolina"}"
          </span>
          <span>zip: "{request ? request.direction.zip : "42603-2958"}"</span>
          <span>country: "{request ? request.direction.country : "USA"}"</span>
          <span>geolocation: &#123;</span>
          <div className="flex flex-col ml-10">
            <span>
              lat: {request ? request.direction.geolocation.lat : 41.0999}
            </span>
            <span>
              lon: {request ? request.direction.geolocation.lon : 45.9888}
            </span>
          </div>
          <span>&#125;</span>
        </div>
        <span>&#125;</span>
        <span>image: "{request ? request.image : "johnsmith.png"}"</span>
      </div>
      <span>&#125;</span>
    </code>
  );
};

export default CodeExample;
