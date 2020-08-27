import mirrors from '@/mirrors/';

const { ustc } = mirrors;

export default {
  mirrors: [
    ustc
  ],
  os: [
    {
      name: 'CentOS 8',
      variables: {
        path: '$contentdir',
        extra: '/etc/yum.repos.d/CentOS-Extras.repo /etc/yum.repos.d/CentOS-AppStream.repo'
      }
    },
    {
      name: 'CentOS 7',
      variables: {
        path: 'centos',
        extra: ''
      }
    },
    {
      name: 'CentOS 6',
      variables: {
        path: 'centos',
        extra: ''
      }
    },
  ]
};
