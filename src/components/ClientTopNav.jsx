import { styled } from "styled-components";

const ClientTopNavWrapper = styled.div`
  background-color: #b3b3b3;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
`;

const BalanceButton = styled.button`
  border-radius: 30px;
  padding: 1.3rem 1rem;
  color: white;
  background-color: #757575;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
`;

const CoverPhoto = styled.div`
  background-color: white;
  height: 100%;
  width: 5rem;
  border-radius: 999999px;
`;

const ClientTopNav = () => {
  return (
    <ClientTopNavWrapper>
      <BalanceButton>
        Smithcoin &#40;credits&#41;
        <br />
        balance
      </BalanceButton>
      <CoverPhoto />
    </ClientTopNavWrapper>
  );
};

export default ClientTopNav;
