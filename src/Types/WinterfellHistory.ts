/**
 * @file
 * @author Andrew Hathaway
 */
export type WinterfellHistory = {
  panels: string[];
  questionsAnswered: {
    [panelId: string]: string[];
  }
};
