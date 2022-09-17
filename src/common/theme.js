export const theme = {
    colors: {
        white: 'white',
        black: 'black',
        primary: '#07c',
        secondary: 'grey',
        random: '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase(),
        muted: '#f6f6f6',
      },
      fontSizes: [
        12, 14, 16, 20, 24, 32
      ],
      space: [
        0, 2, 4, 8, 16, 32, 64
      ],
      borders: {
        normal: '1px solid black',
      },
}