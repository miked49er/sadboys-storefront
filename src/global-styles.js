import universoRegular from './fonts/universo/universo-regular.otf';
import universoBold from './fonts/universo/universo-black.otf';
injectGlobal`
    @font-face {
        font-family: 'Universo';
        src: url(${universoRegular}) format('otf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Universo';
        src: url(${universoBold}) format('otf');
        font-weight: bold;
        font-style: normal;
    }
`;
