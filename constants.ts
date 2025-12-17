import { CheckInOption, FoundationTopic, HabitRule } from './types';

export const CHECK_IN_OPTIONS: CheckInOption[] = [
  {
    id: 'overwhelm',
    label: 'Emotional Overwhelm',
    content: {
      clarity: 'Your system is flooded with inputs. You are not actually in danger; you are experiencing a temporary spike in cortisol and processing lag.',
      pause: 'Stop moving. Put your phone down. Take three long breaths: 4 seconds in, 7 seconds hold, 8 seconds out.',
      action: 'Write down the single most urgent task. Ignore everything else. Do that one thing for 5 minutes.',
      reflection: 'What expectation are you holding onto that is causing this pressure?',
    },
  },
  {
    id: 'discipline',
    label: 'Lack of Discipline',
    content: {
      clarity: 'You are valuing present comfort over future wellbeing. This is a biological default, not a character flaw. It requires manual override.',
      pause: 'Visualize the version of yourself 2 hours from now who gave in. Feel that regret now.',
      action: 'Commit to just 2 minutes of the task you are avoiding. You can stop after 2 minutes if you want.',
      reflection: 'Who are you cheating when you break your own promises?',
    },
  },
  {
    id: 'procrastination',
    label: 'Procrastination',
    content: {
      clarity: 'Procrastination is not laziness; it is emotional regulation. You are avoiding the anxiety or boredom attached to the task.',
      pause: 'Observe the resistance in your body. Where do you feel it? Does it actually physically hurt?',
      action: 'Break the task into a step so small it feels ridiculous. "Open the document" is a valid step.',
      reflection: 'What acts as the trigger for your delay? Identify the precise moment you turn away.',
    },
  },
  {
    id: 'confusion',
    label: 'Mental Confusion',
    content: {
      clarity: 'A lack of clarity usually comes from a lack of definition. You are trying to solve too many undefined variables at once.',
      pause: 'Close your eyes. Visualize a completely empty room. Sit there for 10 seconds.',
      action: 'Define the problem in one simple sentence. If you can\'t write it, you can\'t solve it.',
      reflection: 'What information are you seeking that you don\'t actually need?',
    },
  },
  {
    id: 'avoidance',
    label: 'Avoidance / Comfort',
    content: {
      clarity: 'You are seeking anesthesia. The comfort you feel now will turn into compounding anxiety later.',
      pause: 'Do nothing. Do not open the app. Do not eat the food. Just sit with the urge to escape.',
      action: 'Do the one thing that makes you feel slightly uncomfortable but proud.',
      reflection: 'What specific feeling are you running away from right now?',
    },
  },
];

export const FOUNDATION_TOPICS: FoundationTopic[] = [
  {
    id: 'transience',
    title: 'Emotional Transience',
    explanation: 'No emotion is permanent. Intense feelings usually last 90 seconds chemically. Anything longer is sustained by your internal narrative.',
    reflectionPrompt: 'Recall a time you felt devastated. Where is that feeling now?',
    behavioralSuggestion: 'When an urge hits, wait 2 minutes before acting on it.',
  },
  {
    id: 'pause',
    title: ' The Sacred Pause',
    explanation: 'Between stimulus and response, there is a space. In that space is your power to choose. Impulsivity is the loss of this space.',
    reflectionPrompt: 'When did you last react instantly and regret it?',
    behavioralSuggestion: 'Take one full breath before answering any difficult question today.',
  },
  {
    id: 'anti-validation',
    title: 'Anti-Validation',
    explanation: 'External approval is a fragile fuel source. If you need them to lift you up, you also give them the power to drop you.',
    reflectionPrompt: 'Whose opinion are you currently prioritizing over your own judgment?',
    behavioralSuggestion: 'Do one good thing today that no one will ever know about.',
  },
  {
    id: 'purpose',
    title: 'The "3 Strong Reasons"',
    explanation: 'Willpower fatigues; clear reasons do not. If you cannot list three objective reasons for a goal, you will likely quit.',
    reflectionPrompt: 'Why are you doing your current work? List three non-emotional reasons.',
    behavioralSuggestion: 'Review your "Why" before starting your work session.',
  },
  {
    id: 'traps',
    title: 'Mental Trap: Sunk Cost',
    explanation: 'You continue a mistake because you spent time making it. The past investment is gone. Only future utility matters.',
    reflectionPrompt: 'What are you continuing only because you already started it?',
    behavioralSuggestion: 'Identify one project or habit you should drop immediately.',
  },
];

export const HABIT_RULES: HabitRule[] = [
  {
    id: '1percent',
    title: 'The 1% Rule',
    description: 'Do not aim for transformation. Aim for a 1% improvement. Compounding creates the result, not intensity.',
  },
  {
    id: 'non-negotiable',
    title: 'The Daily Non-Negotiable',
    description: 'Pick one task. It must be done every single day. No excuses. It builds the identity of someone who keeps promises.',
  },
  {
    id: 'fixed-timing',
    title: 'Fixed Timing',
    description: 'Same time. Same place. Same task. Remove the decision-making energy from the equation.',
  },
];
