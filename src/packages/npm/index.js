import mirrors from '@/mirrors/';

const { taobao } = mirrors;

export default {
  mirrors: [taobao],
  os: [
    {
      name: 'All',
      variables: {}
    }
  ]
};
