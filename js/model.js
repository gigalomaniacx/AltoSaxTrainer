const model = {
     currentView : 'mainPage',

     noteImg : "./src/sax-fingering-chart-final.png",
     noteImgWidth: "600vw",

     fingerchart : [
        {
         name: 'fullChart',
         noteImg: "./src/sax-fingering-chart-final.png",
         size : "600vw"
        },
        {
         name: 'LowB-Cb',
         noteImg: "./src/LowB-Cb-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowB#-C',
         noteImg: "./src/LowBsh-C-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowC#-Db',
         noteImg: "./src/LowCsh-Db-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowD',
         noteImg: "./src/LowD-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowD#-Eb',
         noteImg: "./src/LowDsh-Eb-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowE-Fb',
         noteImg: "./src/LowE-Fb-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowE#-F',
         noteImg: "./src/LowEsh-F-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowF#',
         noteImg: "./src/LowFsh-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowGb',
         noteImg: "./src/LowGb-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowG',
         noteImg: "./src/LowG-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowG#-Ab',
         noteImg: "./src/LowGsh-Ab-Finger.png",
         size: '140vw'
        },
        {
         name: 'LowA',
         noteImg: "./src/LowA-Finger.png",
         size: '140vw'
        },
        {
         name: 'A#',
         noteImg: "./src/Ash-Finger.png",
         size: '140vw'
        },
        {
         name: 'Bb',
         noteImg: "./src/Bb-Finger.png",
         size: '140vw'
        },
        {
         name: 'B-Cb',
         noteImg: "./src/B-Cb-Finger.png",
         size: '140vw'
        },
        {
         name: 'B#',
         noteImg: "./src/Bsh-Finger.png",
         size: '140vw'
        },
        {
         name: 'C',
         noteImg: "./src/C-Finger.png",
         size: '140vw'
        },
        {
         name: 'C#-Db',
         noteImg: "./src/Csh-Db-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighD',
         noteImg: "./src/HighD-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighD#-Eb',
         noteImg: "./src/HighDsh-Eb-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighE-Fb',
         noteImg: "./src/HighE-Fb-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighE#-F',
         noteImg: "./src/HighEsh-F-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighF#',
         noteImg: "./src/HighFsh-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighGb',
         noteImg: "./src/HighGb-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighG',
         noteImg: "./src/HighG-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighG#-Ab',
         noteImg: "./src/HighGsh-Ab-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighA',
         noteImg: "./src/HighA-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighA#',
         noteImg: "./src/HighAsh-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighB-Cb',
         noteImg: "./src/HighB-Cb-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighBsh',
         noteImg: "./src/HighBsh-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighC',
         noteImg: "./src/HighC-Finger.png",
         size: '140vw'
        },
        {
         name: 'HighC#-Db',
         noteImg: "./src/HighCsh-Db-Finger.png",
         size: '140vw'
        },
        {
         name: 'HigherD',
         noteImg: "./src/HigherD-Finger.png",
         size: '140vw'
        },
        {
         name: 'HigherD#-Eb',
         noteImg: "./src/HigherDsh-Eb-Finger.png",
         size: '140vw'
        },
        {
         name: 'HigherE-Fb',
         noteImg: "./src/HigherE-Fb-Finger.png",
         size: '140vw'
        },
        {
         name: 'HigherE#',
         noteImg: "./src/HigherEsh-Finger.png",
         size: '140vw'
        },
        {
         name: 'HigherF',
         noteImg: "./src/HigherF-Finger.png",
         size: '140vw'
        },

     ] /*39*/,

     inputs : {
           dropDownOption: 'fullChart', 
      },
      timer: {
         timerOn: false,
         starttime: null,
         endtime: null,
         spentmilisec: null,
         spentsec: 0,
      }
}