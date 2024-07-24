module.exports = {
    project: {
      ios: {},
      android: {},
    },
    dependencies: {
      'react-native-vector-icons': {
        platforms: {
          ios: null,
        },
      },
    },
    assets: ['./src/assets/fonts/'],
    extra: {
      API_URL: 'http://127.0.0.1:8000/api/',
    },
  };