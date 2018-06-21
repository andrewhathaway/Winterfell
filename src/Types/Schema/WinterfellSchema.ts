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
  input: WinterfellQuestionInput;
  validateOn?: string;
  validations: WinterfellValidation[];
};

export type WinterfellQuestionInput = {
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: WinterfellQuestionInputOption[];
};

export type WinterfellQuestionInputOption = {
  text: string;
  value: any;
  conditionalQuestions?: WinterfellQuestion[];
};

export type WinterfellValidation = {
  type: string;
  params: any[];
  message?: string;
};
