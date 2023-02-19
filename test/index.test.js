import { isUsername } from '../src/index.js';

describe('username tests', () => {
    test('valid usernames', () => {
        expect(isUsername('ab')).toBe(true);
        expect(isUsername('user name')).toBe(true);
        expect(isUsername('i like everyone')).toBe(true);
        expect(isUsername('here is cool')).toBe(true);
        expect(isUsername('a b')).toBe(true);
    });

    test('length constraints', () => {
        expect(isUsername('')).toBe(false);
        expect(isUsername(' ')).toBe(false);
        expect(isUsername('a')).toBe(false);
        expect(isUsername('aa')).toBe(true);
        expect(isUsername('12345678901234567890123456789012')).toBe(true);
        expect(isUsername('123456789012345678901234567890123')).toBe(false);
    });

    test('invalid substrings', () => {
        expect(isUsername('``` name')).toBe(false);
        expect(isUsername('name ```')).toBe(false);
        expect(isUsername('name ``` name')).toBe(false);
        expect(isUsername('```')).toBe(false);
        expect(isUsername('discord name')).toBe(false);
        expect(isUsername('name discord')).toBe(false);
        expect(isUsername('name discord name')).toBe(false);
        expect(isUsername('discord')).toBe(false);
        expect(isUsername('i like discord')).toBe(false);
        expect(isUsername('i \nlike discord')).toBe(false);
    });

    test('invalid exact matches', () => {
        expect(isUsername('everyone')).toBe(false);
        expect(isUsername('here')).toBe(false);
    });

    test("doesn't have leading or trailing whitespace", () => {
        expect(isUsername(' name')).toBe(false);
        expect(isUsername('name ')).toBe(false);
        expect(isUsername(' name ')).toBe(false);
        expect(isUsername('  name  ')).toBe(false);
        expect(isUsername('  discord  ')).toBe(false);
        expect(isUsername('  na@me  ')).toBe(false);
        expect(isUsername('  everyone  ')).toBe(false);
        expect(isUsername('\tname\t')).toBe(false);
    });

    test("'everyone' leading/trailing whitespace", () => {
        expect(isUsername('everyone ')).toBe(false);
        expect(isUsername(' everyone')).toBe(false);
    });
});
