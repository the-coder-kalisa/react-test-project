import { styled } from "styled-components";
import Sidebar from "./components/Sidebar";
import ClientTopNav from "./components/ClientTopNav";
import AgetInterface from "./components/AgetInterface";

const Wrapper = styled.div`
  background-color: #e6e6e6;
  height: 100vh;
  width: 100vw;
  padding: 1.2rem;
  display: flex;
  gap: 1.5rem;
`;

const AgentDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <AgentDataContainer>
        <ClientTopNav />
        <AgetInterface />
      </AgentDataContainer>
    </Wrapper>
  );
}

export default App;
