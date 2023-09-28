export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  text: string;
  answers: Array<Answer>;
}

export interface Level {
  id: number;
  amount: string;
  questions: Array<Question>;
}

export interface CurrentLevel {
  id: number;
  amount: string;
  question: Question;
}
