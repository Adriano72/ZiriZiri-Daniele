var zzApiCore = require("zz.internal.api.core");

var zzApiFinance = require("zz.internal.api.finance");

var zzApiFiles = require("zz.internal.api.files");

var zz = {
    API: {
        Core: zzApiCore.ZZ.Internal.API.Core,
        Finance: zzApiFinance.ZZ.Internal.API.Finance,
        Files: zzApiFiles.ZZ.Internal.API.Files
    }
};

exports.ZZ = zz;

exports.version = .2;