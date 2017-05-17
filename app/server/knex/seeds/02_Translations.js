exports.seed = (knex, Promise) => {
  return knex('Translations').insert([
    {
      id: 1,
      request: 'First in, first out',
      context: 'How would you say this in Spanish (Mexico)?',
      language: 'Spanish',
      UserId: 2,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 2,
      request: 'Sneak peak',
      context: "Need this for an article I'm writing in French",
      language: 'French',
      UserId: 3,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 3,
      request: 'Deep-seeded',
      context: 'Writing a Turkish script',
      language: 'Turkish',
      UserId: 4,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 4,
      request: 'Shoe-in',
      context: 'How would you say this is Portuguese?',
      language: 'Portuguese',
      UserId: 5,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    },
    {
      id: 5,
      request: 'Slight of hand',
      context: 'Is there a phrase for this German?',
      language: 'German',
      UserId: 6,
      createdAt: '08/19/2014 00:00:00',
      updatedAt: '08/19/2014 00:00:00'
    }
  ])
  .catch(e => {
    console.error(e)
  })
}
