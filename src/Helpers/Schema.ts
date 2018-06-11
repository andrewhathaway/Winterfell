import { WinterfellQuestionPanel , WinterfellSchema} from "../Types/Schema/WinterfellSchema";

/**
 * @file
 * @author Andrew Hathaway
 */

export const getQuestionPanelById = (schema: WinterfellSchema, questionPanelId: string): WinterfellQuestionPanel => {
  let questionPanel: WinterfellQuestionPanel = null;
  schema.questionPanels.forEach(panel => {
    if (panel.panelId !== questionPanelId) {
      return;
    }

    questionPanel = panel;
  });

  return questionPanel;
};
