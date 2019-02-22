
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          name: 'Guy I Know',
          address: '100 North St.',
          mobile: '555-888-0000',
          email: 'thatguy@gmail.com',
          github: 'gitguy1337',
          created_by: 1
        },
        {
          name: 'Kevin',
          address: '100 Kapolei St.',
          mobile: '555-888-7777',
          email: 'kevinguy@gmail.com',
          twitter: 'kevinguy69',
          created_by: 1
        },
        {
          name: 'Gene',
          address: '100 Green St.',
          mobile: '555-888-2222',
          email: 'golfguy@genemail.com',
          github: 'genecode',
          created_by: 1
        },
        {
          name: 'Zeke',
          address: '100 Pearl St.',
          mobile: '555-888-4444',
          email: 'thatZeke@gmail.com',
          github: 'gitguyzekeinator',
          instagram: 'zekestagram',
          created_by: 1
        },
        {
          name: 'Brad',
          address: '100 Aiea St.',
          mobile: '555-888-1111',
          work: '555-999-1111',
          email: 'bradbrad@gmail.com',
          github: 'gitbrad',
          created_by: 1
        },
        {
          name: 'Eunice',
          address: '100 Queen St.',
          mobile: '555-888-9999',
          email: 'younice@gmail.com',
          github: 'eunicecode',
          created_by: 1
        },
      ]);
    });
};
