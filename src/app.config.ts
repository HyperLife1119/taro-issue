export default {
  pages: [
    'pages/index/index',
  ],
  subpackages: [
    {
      root: 'pkgs',
      pages: [
        'index2/index',
      ]
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
