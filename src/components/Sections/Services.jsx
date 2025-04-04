import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.jpg";
import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Top Projects</h1>
            <p className="font13">
            Our team specializes in delivering innovative and high-performance solutions across various industries. From advanced web applications to AI-powered systems, we build scalable, secure, and user-friendly platforms tailored to meet business needs.
              <br />
              Explore our top projects and see how we drive digital transformation with cutting-edge technology.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Learning Management System"
                text="Advanced MERN-based Learning Management System for seamless course management and student engagement."
                action={() => window.open("https://darmapala-client.onrender.com/", "_blank")}
              />

            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Pro Cleaning Solution"
                text="React-powered Pro Cleaning Solutions for efficient cleaning service management and customer engagement."
                action={() => window.open("https://kleanovation.onrender.com/", "_blank")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Leave Management System"
                text="PHP and MySQL-powered Leave Management System with Tailwind CSS for efficient leave tracking.."
                action={() => window.open("https://github.com/IT21158704/Leave-Management-System")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Stock Management System"
                text="Efficient MERN-based Pharmacy Stock Management System for seamless inventory tracking and control"
                action={() => window.open("https://github.com/Nimsaramahagedara/Pharmacy-Stock-Management-System")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Dry Food Mart"
                text="Scalable MERN-based Dry Food Mart for seamless online ordering and inventory management."
                action={() => window.open("https://github.com/Deneth-Pinsara/Dry_Food_Mart")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Airdrop Site"
                text="Secure and efficient MERN-based Airdrop site for seamless token distribution and management."
                action={() => alert("clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
