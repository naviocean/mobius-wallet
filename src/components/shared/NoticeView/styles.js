import styled from 'styled-components';

import {
  colors,
  fonts,
  fontSizes,
  helpers,
} from 'components/shared/Styleguide';

export const ImageBackgroundView = styled.ImageBackground`
  align-items: flex-end;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const ContentView = styled.View`
  align-items: stretch;
  flex-direction: column;
  padding-left: 24;
  padding-right: 24;
  padding-bottom: 16;
`;

export const Title = styled.Text`
  color: ${colors.textDefault};
  font-family: ${fonts.helveticaNeue.bold};
  font-size: ${fontSizes.title};
  font-weight: bold;
  line-height: ${helpers.calculateLineHeight(fontSizes.title)};
  margin-bottom: 10;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.textSecondary};
  font-family: ${fonts.helveticaNeue.regular};
  font-size: ${fontSizes.default};
  line-height: ${helpers.calculateLineHeight(fontSizes.default)};
  margin-bottom: 50;
  text-align: center;
`;