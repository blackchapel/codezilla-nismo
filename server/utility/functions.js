// Removing sensitive data from Public Profile
const removeSensitiveData = (data) => {
    data.password = undefined;
    data.phoneotp = undefined;
    data.emailotp = undefined;
    data.tokens = undefined;
    data.createdAt = undefined;
    data.updatedAt = undefined;
    data.__v = undefined;
    return data;
};

// Exporting Modules
module.exports = removeSensitiveData;