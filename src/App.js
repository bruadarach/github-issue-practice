import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  display: flex;
`;

const App = () => {
  const style = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    margin: "1rem",
  };

  return (
    <Wrapper>
      <Title>App is running now!</Title>
      <img
        src={process.env.PUBLIC_URL + "/image/lucky.png"}
        alt="angel"
        style={style}
      ></img>
    </Wrapper>
  );
};

export default App;
