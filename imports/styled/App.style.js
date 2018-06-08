'use strict';

import styled, { css } from 'styled-components';

export const H2 = styled.div`
  font-family: 'Cute Font';
  font-size: 4em;
  &:hover {
    color: white;
    font-size: 4em;
    font-style: italic;
  }
`
export const Atag = styled.div`
  color: red;
  &:hover {
    color: yellow;
  }
  &:active {
    color: green;
  }
`