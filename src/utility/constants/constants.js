export const PASSWORD_MIN_LEN = 6;
export const URL_REGEXP = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
export const EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
// export const PhNoPattern = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
export const URL = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
export const PhNoPattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;

export const SETTINGS_PATH = {
    MY_ACCOUNT: '/settings/my-account',
    SWITCH_ACCOUNT: '/settings/switch-account',
    MANAGE_DATA: '/settings/manage-data',
    FEED_SETTING: '/settings/feed-setting',
    NOTIFICATION: '/settings/notification',
    PRIVACY_POLICY: '/settings/privacy-policy',
};
export const PRIVATE_PATH = {
    FEEDS: '/feeds',
    LOGOUT: '/logout',
    EXPLORE: '/explore',
    CREATE: '/create',
    LIKES: '/likes',
    PROFILE: '/profile',
};

export const NO_HEADER_ROUTES = {
    NO_NETWORK: "/network_error"
};


export const routes = {
    ROOT: '/',
    CUSTOMIZE_FEEDS: '/customize-tags',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/reset_password',
    TERMS_AND_CONDITION: '/terms-and-condition',
    SELECT_FAVORITE_TAGS: '/favorite-tags',
    SELECT_AVOID_TAGS: '/avoid-tags',
    LANDING: '/landing',
    COMMUNITY_GUIDELINES: '/community-guidelines',
    ACCOUNT_PRIVACY: '/account-privacy',
    SETTING: '/settings',
    ...PRIVATE_PATH,
    ...SETTINGS_PATH,
    ...NO_HEADER_ROUTES

};

export const MinImageResolution = {
    height: 683,
    width: 1024
}

export const address_attributes = {
    city: '',
    state: '',
    zip: '',
    country: '',
    latitude: '',
    longitude: '',
    formatted_address: ''
}

export const ImageTypes = {
    PNG: 'png',
    JPEG: 'jpeg'
}

export const Base64ImagesTypes = {
    PNG: 'data:image/png',
    JPEG: 'data:image/jpeg'
}


export const AllWeekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export const FormatedWeekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
