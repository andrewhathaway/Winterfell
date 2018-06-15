/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import Winterfell, { IWinterfellProps } from './Winterfell';

export interface IWinterfellWithState {
  currentPanelId: string;
  questionAnswers: {
    [questionId: string]: any;
  };
}

type Props = Partial<IWinterfellProps>;

class WithState extends React.Component<Props, IWinterfellWithState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentPanelId: null,
      questionAnswers: {}
    };
  }

  handleSwitchPanel(currentPanelId: string): void {
    this.setState({ currentPanelId });
  }

  render(): JSX.Element {
    return (
      <Winterfell
        {...this.props as any}
        currentPanelId={this.state.currentPanelId}
        questionAnswers={this.state.questionAnswers}
        onSwitchPanel={this.handleSwitchPanel.bind(this)}
      />
    );
  }
}

export default WithState;
