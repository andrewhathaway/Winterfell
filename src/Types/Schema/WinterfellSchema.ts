/**
 * @file
 * @author Andrew Hathaway
 */
export type WinterfellSchema = {
  formPanels: WinterfellFormPanels[];
  questionPanels: WinterfellQuestionPanel[];
  questionSets: WinterfellQuestionSet[];
};

export type WinterfellFormPanels = {
  index: number;
  panelId: string;
};

export type WinterfellQuestionPanel = {
  panelId: string;
  panelHeader: string;
  panelText: string;
  action: any; // @todo
  button: WinterfellButton;
  questionSets: WinterfellQuestionSetDescriptor[];
};

export type WinterfellButton = {
  text: string;
};

export type WinterfellQuestionSetDescriptor = {
  index: number;
  questionSetId: string;
};

export type WinterfellQuestionSet = {
  questionSetId: string;
  questions: WinterfellQuestion[];
};

export type WinterfellQuestion = {
  questionId: string;
  question: string;
  input: any; // @todo
  validations: any[]; // @todo
};
