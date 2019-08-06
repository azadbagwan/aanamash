import styled from 'styled-components';
import defaultImg from "../images/room-1.jpeg"

const StyledHero =styled.header`
  min-height: calc(60vh - 46px);
  background: url(${props => (props.img? props.img:defaultImg)}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom:15px;
`;
export default StyledHero;