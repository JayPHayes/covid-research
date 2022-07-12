import React from "react";

const ALCounties = () => {
  return (
    <section>
      <div>
        <div className="hidden md:block">

        <h1>Power BI: AL Counties</h1>
          <iframe
            className=" h-screen"
            title="CovidResearch_QlikEnterprise_20220301 - Level of Transmission" 
            width="100%"
            // src="https://app.powerbi.com/view?r=eyJrIjoiMDA0YzAzODAtNzhlMy00NzQwLThiZmQtOTc3MzhmMzczY2ZjIiwidCI6IjFkMmI5N2Y2LTMyMjgtNDFkZC1iYzk1LTQwZDE2ODU5MGU2NSIsImMiOjN9" 
            src="https://app.powerbi.com/reportEmbed?reportId=8554af49-4be3-425e-b524-dbee0999c5f1&groupId=33c59092-5150-427f-879b-235a7d3c5904&autoAuth=true&ctid=1d2b97f6-3228-41dd-bc95-40d168590e65&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtYi1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" 
            frameBorder={0}
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ALCounties;
