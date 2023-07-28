import { styled } from "styled-components";

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

const AddAgentButton = styled(NewAgentButton)`
  border-radius: 999999px;
  font-size: 30px;
  font-weight: 500;
  padding: 0;
  width: 50px;
  height: 50px;
`;

const AgetInterface = () => {
  return (
    <>
      <NewAgentButtons>
        <NewAgentButton>New Agent</NewAgentButton>
        <AddAgentButton>+</AddAgentButton>
      </NewAgentButtons>
    </>
  );
};

export default AgetInterface;
