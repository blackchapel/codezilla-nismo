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

// Remove unnecessary data
const removeUnnecessaryData = (data) => {
    let stations = data.stations[0];
    stations._id = undefined;
    stations.placeId = undefined;
    stations.countryCode = undefined;
    stations.division = undefined;
    stations.lat = undefined;
    stations.lng = undefined;
    stations.placeName = undefined;
    stations.postalCode = undefined;
    stations.state = undefined;
    stations.updatedAt = undefined;
    return stations;
};

// Exporting Modules
module.exports = {
    removeSensitiveData,
    removeUnnecessaryData
};