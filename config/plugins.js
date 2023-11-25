module.exports = () => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: process.env.NETLIFY_ACCESS_TOKEN,
            sites: [
                {
                    name: 'Rincon Verde Blog',
                    id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                    // buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
                    // branch: 'master' // optional
                }
            ]
        },
    },
});