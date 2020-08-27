import mirrors from '@/mirrors/';

const { taobao, tuna, ustc } = mirrors;

export default {
  mirrors: [
    taobao,
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
