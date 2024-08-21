import Character from '../character';

test('should create a character with valid properties', () => {
  const character = new Character('Archer', 'Bowman', 25, 25);
  const expected = {
    attack : undefined,
    defence : undefined,
    health: 100, 
    level: 1,
    name: 'Archer',
    type: 'Bowman',
  }

expect(character).toEqual(expected)
});

test('should throw an error if name is not a string', () => {
  expect(() => new Character(123, 'Bowman', 25, 25)).toThrow('поле name не соответствует заданным правилам');
});

test('should throw an error if name is less than 2 characters', () => {
  expect(() => new Character('A', 'Bowman', 25, 25)).toThrow('поле name не соответствует заданным правилам');
});

test('should throw an error if name is more than 10 characters', () => {
  expect(() => new Character('SuperLongName', 'Bowman', 25, 25)).toThrow('поле name не соответствует заданным правилам');
});

test('should throw an error if type is not in allowed types', () => {
  expect(() => new Character('Archer', 'Knight', 25, 25)).toThrow('поле type не соответствует заданным правилам');
});

test('should throw an error if type is not a string', () => {
  expect(() => new Character('Archer', 123, 25, 25)).toThrow('поле type не соответствует заданным правилам');
});