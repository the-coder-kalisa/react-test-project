/* eslint-disable no-undef */
import { useState } from "react";
import { styled } from "styled-components";

const SidebarWrapper = styled.div`
  border-radius: 10px;
  background-color: #b3b3b3;
  height: 100%;
  width: fit-content;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SidebarButton = styled.button`
  text-align: center;
  border-radius: 23px;
  padding: 1rem 1.3rem;
  background-color: white;
`;
const CloseSidebarButton = styled(SidebarButton)`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  width: fit-content;
`;

const Nav = styled(SidebarButton)`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 20px;
`;

const Sidebar = () => {
  const navs = [
    "Agent Workshop",
    "My Agents",
    "Engines",
    "Marketplace",
    "Knowledgebases",
    "Engine Room",
  ];

  const [activeNav, setActiveNav] = useState("My Agents");

  return (
    <SidebarWrapper>
      <CloseSidebarButton>
        Close <br />
        Sidebar
      </CloseSidebarButton>
      {navs.map((nav, index) => (
        <Nav
          onClick={() => setActiveNav(nav)}
          style={
            nav === activeNav
              ? { background: "#757575", color: "white" }
              : { background: "white", color: "black" }
          }
          $active
          key={index}
        >
          {nav}
        </Nav>
      ))}
    </SidebarWrapper>
  );
};

export default Sidebar;
