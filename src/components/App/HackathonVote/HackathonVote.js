import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-check-box';

import { colors } from 'components/shared/Styleguide';
import Button from 'components/shared/Button';

import {
  Container, Description, List, CheckboxRow, Label,
} from './styles';

import Apps from './apps';

class HackathonVote extends Component {
  static propTypes = {
    mobiBalance: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
      pop: PropTypes.func.isRequired,
    }).isRequired,
    sendHackathonVote: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  state = {
    selectedApp: null,
  };

  handleSubmit = () => {
    this.props.sendHackathonVote(this.state.selectedApp);
  };

  handleBack = () => this.props.navigation.pop();

  handleSelectApp = (number) => {
    this.setState({ selectedApp: number });
  };

  renderApp = (name) => {
    const { selectedApp } = this.state;

    const number = Apps[name];

    return (
      <CheckboxRow key={name}>
        <CheckBox
          checkBoxColor={colors.textPrimary}
          isChecked={number === selectedApp}
          onClick={() => this.handleSelectApp(number)}
        />
        <Label>{name}</Label>
      </CheckboxRow>
    );
  };

  renderPoll() {
    const { selectedApp } = this.state;
    const { t } = this.props;

    return (
      <Container>
        <Description>{t('hackathonVote.description')}</Description>

        <List>{Object.keys(Apps).map(this.renderApp)}</List>

        <Button
          disabled={!selectedApp}
          onPress={this.handleSubmit}
          title={t('hackathonVote.submit')}
        />
      </Container>
    );
  }

  renderNotice() {
    const { t } = this.props;

    return (
      <Container>
        <Description>{t('hackathonVote.notice')}</Description>
      </Container>
    );
  }

  render() {
    const { mobiBalance } = this.props;

    if (mobiBalance >= 5000) return this.renderPoll();

    return this.renderNotice();
  }
}

export default HackathonVote;
