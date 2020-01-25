/**
 * @file
 * @author Andrew Hathaway
 */
import * as React from 'react';
import Winterfell, { IWinterfellProps } from './Winterfell';
import { WinterfellHistory } from './Types/WinterfellHistory';
import { countOccurrences } from './Helpers/Array';

export interface IWinterfellWithState {
  currentPanelId: string;
  questionAnswers: {
    [questionId: string]: any;
  };

  history: WinterfellHistory;
}

type Props = Partial<IWinterfellProps>; // @todo: Rethink this

class WithState extends React.Component<Props, IWinterfellWithState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentPanelId: null,
      questionAnswers: {},
      history: {
        panels: [],
        questionsAnswered: {}
      }
    };
  }

  handleSwitchPanel(currentPanelId: string, updateHistory: boolean = true): void {
    this.setState({ currentPanelId });

    if (!updateHistory) {
      return;
    }

    this.setState({
      history: {
        ...this.state.history,
        panels: [
          ...this.state.history.panels,
          currentPanelId
        ]
      }
    });
  }

  handleOnChange(questionId: string, value: any): void {
    let historyUpdate: WinterfellHistory = {
      ...this.state.history,
      questionsAnswered: {
        ...this.state.history.questionsAnswered,
        [this.state.currentPanelId]: [
          ...this.state.history.questionsAnswered[this.state.currentPanelId] || [],
          questionId
        ]
      }
    };

    // If the question is already in the array, then there's nothing to change
    // @todo There's probably a better way of doing this.
    const currentPanelsQuestionHistory = historyUpdate.questionsAnswered[this.state.currentPanelId];
    if (countOccurrences(currentPanelsQuestionHistory, questionId) > 1) {
      historyUpdate = this.state.history;
    }

    // @todo handle arrays, types etc of question
    this.setState({
      questionAnswers: {
        ...this.state.questionAnswers,
        [questionId]: value
      },
      history: historyUpdate
    });

    this.props.onChange(questionId, value);
  }

  render(): JSX.Element {
    return (
      <Winterfell
        {...this.props as any}
        currentPanelId={this.state.currentPanelId}
        questionAnswers={this.state.questionAnswers}
        onSwitchPanel={this.handleSwitchPanel.bind(this)}
        onChange={this.handleOnChange.bind(this)}
      />
    );
  }
}

export default WithState;
