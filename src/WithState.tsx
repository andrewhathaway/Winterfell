/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';

export interface IWinterfellWithState {
  currentPanelId: string;
  questionAnswers: {
    [questionId: string]: any;
  };
}

class WithState extends React.Component<{}, IWinterfellWithState> {
  constructor(props) {
    super(props);

    this.state = {
      currentPanel: null,
      questionAnswers: {}
    };
  }

  render() {
    return <div />;
  }
}

export default WithState;
