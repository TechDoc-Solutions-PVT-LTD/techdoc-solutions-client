import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets
import Deneth from "../../assets/img/team/deneth.jpg";
import Nadun from "../../assets/img/team/nadun.jpg";
import Oshadhi from "../../assets/img/team/oshadhi.jpg";
import Nimsara from "../../assets/img/team/nimsara.jpg";
import Thisaru from "../../assets/img/team/thisaru.jpg";

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

export default function Team() {
  const teamMembers = [
    { 
      img: Deneth, 
      name: "Deneth Pinsara", 
      role: "Software Engineer - Fullstack",
      link: "https://deneth-pinsara.github.io/"
    },
    { 
      img: Oshadhi, 
      name: "Oshadhi Anjana", 
      role: "Associate Software Engineer - Fullstack",
      link: "https://www.linkedin.com/in/oshadhi-anjana-kumarasinghe-a784aa213/"
    },
    { 
      img: Nimsara, 
      name: "Dilruk Nimsara", 
      role: "Software Engineer - Fullstack",
      link: "https://www.linkedin.com/in/nimsara-mahagedara/"
    },
    { 
      img: Nadun, 
      name: "Nadun Dilshan", 
      role: "Associate Software Engineer - Fullstack",
      link: "https://nadundilshan.netlify.app/"
    },
    { 
      img: Thisaru, 
      name: "Thisaru Dilhara", 
      role: "Web Developer",
      link: "https://it21159176.github.io/"
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slidesToShow = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + slidesToShow >= teamMembers.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? teamMembers.length - slidesToShow : prev - 1
    );
  };

  const visibleMembers = teamMembers.slice(
    currentSlide, 
    Math.min(currentSlide + slidesToShow, teamMembers.length)
  );

  const remainingSlides = slidesToShow - visibleMembers.length;
  if (remainingSlides > 0) {
    visibleMembers.push(...teamMembers.slice(0, remainingSlides));
  }

  const handleMemberClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Wrapper id="team">
      <div className="whiteBg mt-20">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Team</h1>
            <p className="font13">
                  Our team at TechDoc Solutions is a dynamic group of
                  innovators, developers, and problem-solvers dedicated to
                  building cutting-edge software solutions.
                  With a passion for technology and a commitment to excellence, we collaborate to
                  turn ideas into reality, ensuring efficiency, scalability, and
                  success for our clients.
            </p>
          </HeaderInfo>

          <SliderContainer>
            <ArrowButton direction="left" onClick={prevSlide}>
              <ArrowLeftIcon />
            </ArrowButton>

            <SliderContent>
              {visibleMembers.map((member, index) => (
                <TeamCard key={`${member.name}-${index}`}>
                  <div className="card" onClick={() => handleMemberClick(member.link)}>
                    <ProjectBox
                      img={member.img}
                      title={member.name}
                      text={member.role}
                      action={() => handleMemberClick(member.link)}
                    />
                  </div>
                </TeamCard>
              ))}
            </SliderContent>

            <ArrowButton direction="right" onClick={nextSlide}>
              <ArrowRightIcon />
            </ArrowButton>
          </SliderContainer>

          <DotsContainer>
            {Array.from({ length: Math.ceil(teamMembers.length / slidesToShow) }).map((_, index) => (
              <Dot
                key={index}
                active={index === Math.floor(currentSlide / slidesToShow)}
                onClick={() => setCurrentSlide(index * slidesToShow)}
              />
            ))}
          </DotsContainer>
        </div>
        <div className="row flexCenter">
          <div style={{ margin: "20px 0", width: "200px" }}>
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

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
`;

const SliderContent = styled.div`
  display: flex;
  gap: 30px;
  width: 90%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const TeamCard = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  transition: all 0.3s ease;
  
  .card {
    width: 100%;
    height: 350px;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  margin: 0 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(200, 200, 200, 0.9);
    transform: scale(1.05);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#333" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;