export interface DecisionCardContent {
  clarity: string;
  pause: string;
  action: string;
  reflection: string;
}

export interface CheckInOption {
  id: string;
  label: string;
  content: DecisionCardContent;
}

export interface FoundationTopic {
  id: string;
  title: string;
  explanation: string;
  reflectionPrompt: string;
  behavioralSuggestion: string;
}

export interface HabitRule {
  id: string;
  title: string;
  description: string;
}

export enum ViewState {
  CHECK_IN = 'CHECK_IN',
  FOUNDATION = 'FOUNDATION',
  HABITS = 'HABITS',
  FOCUS = 'FOCUS',
}
