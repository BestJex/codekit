import mirrors from '@/mirrors/';

const { tuna } = mirrors;

export default {
  mirrors: [
    tuna
  ],
  os: [
    {
      name: 'All',
      variables: {}
    }
  ]
};
