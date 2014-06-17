module.exports = function(){
    this._filterParams = function _filterParams(params, filter) {
        return _.pick(params, filter);
    };

    this._buildQuery = function _buildQuery(params) {
        return _.map(params, function(value, key) {
            if (_.isArray(value)) {
                return key + '=' + value.join('&' + key + '=');
            } else {
            return key + '=' + value;
            }
        }).join('&');
    };
};
