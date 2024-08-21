export default class Character {
    constructor(name, type) {
      const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('поле name не соответствует заданным правилам');
      }
  
      if (typeof type !== 'string' || !allowedTypes.includes(type)) {
        throw new Error('поле type не соответствует заданным правилам');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;

      this.attack = undefined;
      this.defence = undefined;
    }
  }