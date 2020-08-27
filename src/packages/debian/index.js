import mirrors from '@/mirrors/';

const { ustc } = mirrors;

export default {
  mirrors: [
    ustc
  ],
  os: [
    {
      name: 'Debian 11',
      variables: {
        version: 'bullseye'
      }
    },
    {
      name: 'Debian 10',
      variables: {
        version: 'buster'
      }
    },
    {
      name: 'Debian 9',
      variables: {
        version: 'stretch'
      }
    },
    {
      name: 'Debian 8',
      variables: {
        version: 'jessie'
      }
    },
  ]
};
