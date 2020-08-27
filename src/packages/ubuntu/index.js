import mirrors from '@/mirrors/';

const { tuna, ustc } = mirrors;

export default {
  mirrors: [
    tuna,
    ustc
  ],
  os: [
    {
      name: 'Ubuntu 20.04 LTS',
      variables: {
        version: 'focal'
      }
    },
    {
      name: 'Ubuntu 18.04 LTS',
      variables: {
        version: 'bionic'
      }
    },
    {
      name: 'Ubuntu 16.04 LTS',
      variables: {
        version: 'xenial'
      }
    },
    {
      name: 'Ubuntu 14.04 LTS',
      variables: {
        version: 'trusty'
      }
    },
  ]
};
