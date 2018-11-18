const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'Serina' };
    user['lastName'] = 'Ko';
    return user;
  }
};

module.exports = functions;
