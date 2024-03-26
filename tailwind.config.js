module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      fontFamily:{
        'WorkSans': ['WorkSans']
      },
      extend: {
        backgroundImage: {
          'mainH1Bg': "url('./src/assets/img/mainImg.webp')",
          'mainH1BgShort': "url('./src/assets/img/mainImgShort.webp')",
        },
        boxShadow: {
          '3xl': '1px 1px 12px 0px #4747470F, -1px -1px 12px #4747470F',
        }
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        yellow: "#F2B91D",
        gray: "#E0E0E0",
        LightGreyText: "#738697",
        DarkBlueText: "#142B35",
        PearlBlackberryText: "#5B6E76",
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  