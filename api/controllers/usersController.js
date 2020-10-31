const users = [
    {
        id: 0,
        firstName: 'Juku',
        lastName: 'Juurikas',
        email: 'juku@juurikas.ee',
        password: 'juku'
    },
    {
        id: 1,
        firstName: 'Juhan',
        lastName: 'Juurikas',
        email: 'juhan@juurikas.ee',
        password: 'juhan'
    }
];

const usersController = { };

usersController.read = (req, res) => {
  // Return list of users
  res.status(200).json({
      success: true,
      users: users
  });
}

module.exports = usersController;
