import React from "react";
import mindOne from "../img/mind-one.JPG";
import inbong from "../img/inbong.png";
function CompanyList({ company }) {
  const comLogo = {
    1: inbong,
    2: mindOne,
  };
  return (
    <div>
      <div className="companyList">
        <div className="company">
          <img src={comLogo[company.company_id]} alt="mindone" />
        </div>
        <div className="explain">
          <h3 className="comNm">{company.company_nm}</h3>
          <div className="comTenure">
            {company.hire_date} ~ {company.departure_date}
          </div>
          <div className="comIntro">{company.description}</div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default CompanyList;
