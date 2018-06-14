/**
 * @file
 * @author Andrew Hathaway
 */
import { toObject } from './Array';
import { pick } from './Object';

import {
  WinterfellSchema,
  WinterfellQuestionPanel,
  WinterfellQuestionSet
} from '../Types/Schema/WinterfellSchema';
import { isUndefined } from 'util';

export const getQuestionPanelById = (schema: WinterfellSchema, questionPanelId: string): WinterfellQuestionPanel => {
  let questionPanel: WinterfellQuestionPanel = null;
  if (!questionPanelId) {
    return questionPanel;
  }

  schema.questionPanels.forEach(panel => {
    if (panel.panelId !== questionPanelId) {
      return;
    }

    questionPanel = panel;
  });

  return questionPanel;
};

export const getQuestionSetsByQuestionPanel = (
  schema: WinterfellSchema,
  questionPanel: WinterfellQuestionPanel
): WinterfellQuestionSet[] => {
  // This feels OTT...@review
  const questionSetIds = questionPanel.questionSets.map(qS => qS.questionSetId);
  const questionSetMap = toObject<WinterfellQuestionSet, WinterfellQuestionSet>(
    schema.questionSets, i => i.questionSetId, i => i);

  const questionSets: WinterfellQuestionSet[] = Object
    .keys(pick(questionSetMap, questionSetIds))
    .map(questionSetKey =>
      questionSetMap[questionSetKey]);

  return questionSets;
}
