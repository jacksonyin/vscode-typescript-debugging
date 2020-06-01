import { Language } from './enums';

/** Say hello */
export const hello = (name: string, lng: Language) => {
  const greeting = `Hello ${name} by lng: ${lng}!`;
  return greeting;
};