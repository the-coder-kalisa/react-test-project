/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { changeNav } from "../store";
import { useDispatch, useSelector } from "react-redux";

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

const NotMdSidebarWrapper = styled(SidebarWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
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

  const activeNav = useSelector((state) => state.activeNav);
  const dispatch = useDispatch();

  const [md, setMd] = useState();

  const [open, setOpen] = useState(true);

  const handleResize = () => {
    return window.innerWidth > 768;
  };

  useEffect(() => {
    const md = handleResize();

    if (!md) {
      setOpen(false);
    }
    setMd(md);
    window.addEventListener("resize", () => {
      setMd(handleResize());
    });
  }, []);

  return (
    md !== undefined && (
      <>
        {!open ? (
          <AiOutlineMenu
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
        ) : !md ? (
          <NotMdSidebarWrapper onClick={() => setOpen(false)}>
            <CloseSidebarButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              Close <br />
              Sidebar
            </CloseSidebarButton>
            {navs.map((nav, index) => (
              <Nav
                onClick={() => dispatch(changeNav(nav))}
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
          </NotMdSidebarWrapper>
        ) : (
          <SidebarWrapper>
            <CloseSidebarButton
              onClick={() => {
                setOpen(!open);
              }}
            >
              Close <br />
              Sidebar
            </CloseSidebarButton>
            {navs.map((nav, index) => (
              <Nav
                onClick={() => dispatch(changeNav(nav))}
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
        )}
      </>
    )
  );
};

export default Sidebar;
