import axios from "axios";
import React, { useEffect, useState } from "react";
import CompanyList from "./CompanyList";
function Experience(props) {
  const [career, setCareer] = useState([]);

  useEffect(() => {
    axios
      .get("https://port-0-node-server-study-r8xoo2mleme9svb.sel3.cloudtype.app/api/companyList")
      .then(res => {
        setCareer(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="subContents">
      <h1 className="subTitle">Experience</h1>
      {career.map(company => {
        return <CompanyList key={company.company_id} company={company} />;
      })}
    </div>
  );
}

export default Experience;
