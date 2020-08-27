import mirrors from '@/mirrors/';

const { tuna, ustc } = mirrors;

export default {
  mirrors: [
    tuna,
    ustc
  ],
  os: [
    {
      name: 'Windows',
      variables: {
        cmd: 'set'
      }
    },
    {
      name: 'MacOS, Linux',
      variables: {
        cmd: 'export'
      }
    }
  ]
};
