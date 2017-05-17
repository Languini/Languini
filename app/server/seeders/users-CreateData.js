module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      fb_id: 'abcd1234',
      email: 'help@languini.com',
      name: 'Languini',
      photo: 'https://image.flaticon.com/icons/svg/401/401538.svg',
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      fb_id: '12345abcde',
      email: 'rsmith@gmail.com',
      name: 'Robert Smith',
      photo: 'https://static.pexels.com/photos/212092/pexels-photo-212092.jpeg',
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      fb_id: '12345abcdef',
      email: 'jwalker@gmail.com',
      name: 'Janae Walker',
      photo: 'https://static.pexels.com/photos/88767/pexels-photo-88767.jpeg',
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      fb_id: '12345abcdefg',
      email: 'orodrigues@gmail.com',
      name: 'Oscar Rodrigues',
      photo: 'https://static.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg',
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      fb_id: '12345abcdefgh',
      email: 'mroberts@gmail.com',
      name: 'Michael Roberts',
      photo: 'https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      fb_id: '12345abcdefghi',
      email: 'jhunt@gmail.com',
      name: 'James Hunt',
      photo: 'https://static.pexels.com/photos/91227/pexels-photo-91228.jpeg',
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users')
  }
}
