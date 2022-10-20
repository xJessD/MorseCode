import { type } from 'os';
import * as funct from './functions';

describe("morseToEng Tests", () => {

  test('Empty input morseToEng', () => {
    expect(funct.morseToEng(" ")).toBe("");
  });
  
  test('To be defined', () => {
    expect(funct.morseToEng("hello")).toBeDefined();
  });

  test("Outputs 'hello world' as expected", () => {
    expect(funct.morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toBe("HELLO WORLD")
  });

  test("Should throw error", () => {
    expect(() => {
      funct.morseToEng("");
    }).toThrow("invalid inputs");
  });

  // Does not allow emoji input
  // test('Emoji input', () => {
  //   expect(func.engToMorse(✌️)).toBe('Incorrect input. Please input a string');
  // })



});

describe("engToMorse Tests", () => {

  test('Empty input engToMorse', () => {
    expect(funct.engToMorse(" ")).toBe("/");
  });

  test('To be defined', () => {
    expect(funct.engToMorse("hello")).toBeDefined();
  });

  test("Outputs 'hello world' as expected", () => {
    expect(funct.engToMorse("hello world")).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
  });

  test("Should throw error", () => {
    expect(() => {
      funct.engToMorse("");
    }).toThrow("invalid inputs");
  });
});




