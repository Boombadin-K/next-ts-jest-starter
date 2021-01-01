const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// NOTE : you need to setup .env.test here
process.env.APP_THEME = 'default';

enzyme.configure({ adapter: new Adapter() });
