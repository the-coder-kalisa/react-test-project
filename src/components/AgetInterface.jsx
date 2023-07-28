import { styled } from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const NewAgentButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const NewAgentButton = styled.button`
  background-color: #757575;
  color: white;
  font-size: 20px;
  padding: 1rem 1.3rem;
  border-radius: 20px;
`;

const Button = styled.button`
  text-align: center;
  border-radius: 23px;
  padding: 1rem 1.3rem;
  background-color: #2c2c2c;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 25px;
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 30px;
  flex-direction: column;
  background-color: #8080807a;
`;

const ActiveNavContainer = styled.div`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AgetInterface = () => {
  const [open, setOpen] = useState(false);
  const activeNav = useSelector((state) => state.activeNav);
  return (
    <>
      <NewAgentButtons>
        <NewAgentButton onClick={() => setOpen(true)}>New Agent</NewAgentButton>
        <AiFillPlusCircle color="#757575" size={60} />
      </NewAgentButtons>
      <ActiveNavContainer>{activeNav}</ActiveNavContainer>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        onClose={() => setOpen(false)}
      >
        <ModalWrapper onClick={() => setOpen(false)}>
          <Button>Simple Canvas</Button>
          <Button>Advanced Canvas</Button>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default AgetInterface;
