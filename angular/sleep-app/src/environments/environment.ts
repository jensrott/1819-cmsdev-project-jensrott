// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  wpAPI: {
    url: 'http://localhost/wp-json',
    authUrl: 'http://localhost/wp-json/jwt-auth/v1',
    endPoints: {
      sorting: '?sort=nid',
      includeImage: '?include=field_image',
      token: '/token',
      register: '/wp/v2/users/register',
      me: '/wp/v2/users/me',
      users: '/wp/v2/users',
      tips_tools: '/wp/v2/tips-tools?_embed',
      media: '/wp/v2/media',
      acfFriends: '/acf/v3/friends',
      Friends: '/wp/v2/friends',
      acfSleep_goals: '/acf/v3/sleep-goals',
      sleep_goals: '/wp/v2/sleep-goals',
      acfSleep_results: '/acf/v3/sleep-results',
      sleep_results: '/wp/v2/sleep-results',
      photos_competition: '/wp/v2/photos-competition',
      acfPhotos_competition: '/acf/v3/photos-competition'
    }
  }
};
