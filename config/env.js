module.exports = {

    app: {
        developer: {
            domain: 'https://localhost'
        },

        production: {
            domain: 'https://localhost'
        }
    },

    jwtSecret: 'some salt',
    jwtSession: {
        session: false
    },

    database_developer: 'mongodb://localhost:27017/valver-db',

    database_production: 'mongodb://localhost:27017/valver-db',

    bodyParser_developer: {
        extended: true,
        limit: '100kb'
    },

    bodyParser_production: {
        extended: true,
        limit: '100kb'
    },

    twilio_developer: {
        accountSid: '',
        authToken: '',
        fromMobNumber: '+15005550006'
    },

    twilio_production: {
        accountSid: '',
        authToken: '',
        fromMobNumber: '+15005550006'
    },

    mailgun_developer: {
        api_key: 'key-',
        domain: '',
        from: 'valver-developer <valver_developer@mail.com>'
    },
    mailgun_production: {
        api_key: 'key-',
        domain: '',
        from: 'Valver Inc. <valver@email.com>'
    },

    registrationMode: {
        inviteCodeOnly: false
    },

    appMaxInvitationNumber: 10000,

    USER: {
        smsCodeSentAtBuffer: 10, // minutes
        smsCodeSentAttempts: 5, // times
        avatar: {
            width: 100,
            height: 100,
            folder: 'public/images/user_avatars/',
            allowedMimeType: [
                'image/jpeg',
                'image/png',
            ]
        }
    },

    SO: {
        serv_req_start_datetime_buffer: 5,
        allow_SO_to_be_modified_buffer: 15,
        avatar: {
            width: 100,
            height: 100,
            folder: 'public/images/so_avatars/',
            allowedMimeType: [
                'image/jpeg',
                'image/png',
            ]
        }
    },

    EVENT: {
        isExpPointsAvailable: true,
        event_start_date_buffer: 15,
        allowed_auto_approved_event_size_limit: 10,
        avatar: {
            width: 100,
            height: 100,
            folder: 'public/images/event_avatars/',
            allowedMimeType: [
                'image/jpeg',
                'image/png',
            ]
        }
    },

    CHAT: {
        maxMessageSize: 10 * 1024 // in bytes
    }
};
