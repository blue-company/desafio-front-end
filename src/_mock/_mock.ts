import { ASSETS_API } from 'src/config-global';

import { _jobTitles } from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  jobTitle: (index: number) => _jobTitles[index],
  // Image
  image: {
    avatar: (index: number) => `${ASSETS_API}/assets/images/avatar/avatar_${index + 1}.jpg`,
  },
};
