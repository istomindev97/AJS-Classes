import Character from '../character';

test('should create a character with valid properties', () => {
  const character = new Character('Archer', 'Bowman', 25, 25);

  expect(character.name).toBe('Archer');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
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