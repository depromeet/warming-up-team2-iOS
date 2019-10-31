import React from 'react';
import styled from 'styled-components/native';

import { IC_BACK } from 'libs/icons';

export const defaultHeaderStyle = {
  backgroundColor: 'white',
  elevation: 0,
  borderBottomWidth: 0,
};

export const mainHeaderStyle = {
  elevation: 0,
  borderBottomWidth: 0,
  marginTop: 20,
};

export const defaultHeaderTitleStyle = {
  fontSize: 18,
  lineHeight: 24,
  color: '#2c3744',
  fontWeight: 'normal',
};

const HeaderBackImage = styled.Image.attrs({ source: IC_BACK })``;

export const baseStackNavigationOptions = {
  headerBackTitle: null,
  headerStyle: defaultHeaderStyle,
  headerBackImage: () => <HeaderBackImage />,
  headerLeftContainerStyle: {
    paddingLeft: 20,
  },
  headerRightContainerStyle: {
    paddingRight: 20,
  },
};
