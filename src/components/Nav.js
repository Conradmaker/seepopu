import React, { useState, useContext, createContext } from "react";
import styled, { css, keyframes } from "styled-components";
import { SearchText } from "./List";
const slide = keyframes`
0%{
    transform:translateY(500px)
}

}
100%{
    transform:translateY(0px)
}
`;
const Header = styled.header`
  height: 70px;
  background: linear-gradient(#62717b 0, #62717b 30%, rgba(0, 0, 0, 0) 100%);
  font-size: 24px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  button {
    position: absolute;
    right: 10px;
    color: white;
    font-size: 20px;
    border: none;
    outline: none;
    background: none;
    font-family: "Gugi", cursive;
    &:hover {
      color: #002984;
      background: #fff;
      border-radius: 10px;
    }
  }
  h1 {
    font-family: "Gugi", cursive;
  }

  top: 0;
  left: 0;
  right: 0;
`;

const Search = styled.form`
  width: 100%;
  height: 150px;
  position: fixed;
  display: flex;
  justify-content: center;

  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: #102027;
  display: none;
  animation: ${slide} 0.5s ease-in;
  input {
    width: 80%;
    height: 30px;
    margin: 30px auto;
    font-size: 18px;
    padding: 5px 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    display: block;
  }
  small {
    display: block;
    font-size: 11px;
    margin: 5px auto;
    text-align: center;
    color: gray;
  }
  ${(props) =>
    props.open &&
    css`
      display: initial;
    `};
`;
export const searchSetOpen = createContext();
export const searchOpen = createContext();
export default function Nav() {
  const [open, setOpen] = useState(false);
  const setText = useContext(SearchText);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <searchOpen.Provider value={open}>
      <searchSetOpen.Provider value={setOpen}>
        <Header>
          <h1> 실시간 해수욕장</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? "닫기" : "검색"}
          </button>
          <Search open={open}>
            <input placeholder="검색어를 입력해주세요" onChange={onChange} />
            <small> 녹색:원활 / 주황:주의 / 빨강:위험</small>
            <small> 표정과 그림자 색으로 혼잡도를 확인할 수 있습니다.</small>
            <small>주변 사람수 : 지역 kt 기지국에 기반한 사용자</small>
          </Search>
        </Header>
      </searchSetOpen.Provider>
    </searchOpen.Provider>
  );
}
