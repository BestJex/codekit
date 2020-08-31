import mirrors from '@/mirrors/';

const { tuna, ustc } = mirrors;

export default {
  mirrors: [
    tuna,
    ustc
  ],
  os: [
    {
      name: 'Arch Linux ARM'
    },
  ]
};
