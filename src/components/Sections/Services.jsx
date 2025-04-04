import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
// import FullButton from "../Buttons/FullButton";
// // Assets
// import AddImage1 from "../../assets/img/add/1.png";
// import AddImage2 from "../../assets/img/add/2.png";
// import AddImage3 from "../../assets/img/add/3.png";
// import AddImage4 from "../../assets/img/add/4.png";
// import ConsultingIcon from "../../assets/svg/Services/ConsultingIcon";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              At TechDoc Solutions, we deliver top-tier software solutions
              tailored to your business needs.
              <br />
              From web and mobile development to AI-driven automation and cloud
              solutions, we ensure innovation, efficiency, and scalability.
              <br />
              Let’s build the future together!
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Development"
                subtitle="Creating responsive, dynamic, and user-friendly websites tailored to your business needs, leveraging the latest technologies."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Web Designing"
                subtitle="We create visually stunning and user-friendly websites that are both functional and responsive across all devices."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="maintenance"
                title="Maintenance"
                subtitle="We ensure your systems run smoothly with regular updates, security patches, and performance optimizations, keeping your software reliable and efficient."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="consulting"
                title="consulting"
                subtitle="Our consulting services help businesses develop efficient strategies, optimize processes, and achieve sustainable growth through expert guidance and tailored solutions."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
