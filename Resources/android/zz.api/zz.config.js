var zz = {
    Config: {
        Local: {
            DB: {
                name: "zz-mobile-frontend-titanium-db",
                schema: "/data/db/zz-mobile-frontend-titanium-db"
            }
        },
        Cloud: {
            baseURL: "https://beta.ziriziri.com/zz/api/v02",
            cdnURL: "https://beta.ziriziri.com/zz/api/v02/cdn",
            cached: false
        }
    }
};

exports.ZZ = zz;

exports.version = .2;