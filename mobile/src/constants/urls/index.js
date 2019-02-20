import DevUrls from './Urls.dev';
import ProdUrls from './Urls.prod';

export default (__DEV__ === 'production') ? ProdUrls : DevUrls;
  