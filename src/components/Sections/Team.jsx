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
  const [slidesToShow, setSlidesToShow] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + 1 >= teamMembers.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const getVisibleMembers = () => {
    let visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  const visibleMembers = getVisibleMembers();

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
                <TeamCard key={`${member.name}-${index}`} slidesToShow={slidesToShow}>
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
            {teamMembers.map((_, index) => (
              <Dot
                key={index}
                active={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </DotsContainer>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 50px;
  
  p {
    margin-top: 20px;
    
    br {
      @media (max-width: 768px) {
        display: none;
      }
    }
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
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TeamCard = styled.div`
  flex: 0 0 ${props => 100 / props.slidesToShow - 5}%;
  max-width: ${props => 100 / props.slidesToShow - 5}%;
  transition: all 0.3s ease;
  padding: 0 10px;
  
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
      width: 120px;
      height: 120px;
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

  @media (max-width: 1024px) {
    flex: 0 0 ${props => props.slidesToShow === 2 ? '45%' : '90%'};
    max-width: ${props => props.slidesToShow === 2 ? '45%' : '90%'};
  }

  @media (max-width: 768px) {
    flex: 0 0 90%;
    max-width: 90%;
    
    .card {
      height: 300px;
      
      img {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  margin: 0 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(200, 200, 200, 0.9);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 8px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#333" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;