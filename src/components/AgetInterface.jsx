import { styled } from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

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

const AgetInterface = () => {
  return (
    <>
      <NewAgentButtons>
        <NewAgentButton>New Agent</NewAgentButton>
        <AiFillPlusCircle color="#757575" size={60} />
      </NewAgentButtons>
    </>
  );
};

export default AgetInterface;
