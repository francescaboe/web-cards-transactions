import { css } from 'styled-components'
/**
 * blocks of often used styles
 **/
/*
use like so
const Wrapper = styled.div`
  ${flexCenter};
  height: 100vh;
`
*/

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
