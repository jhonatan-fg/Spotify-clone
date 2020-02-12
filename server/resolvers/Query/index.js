const UserQuery = require('./UserQuery');
const ArtistQuery = require('./ArtistQuery');
const ReleaseQuery = require('./ReleaseQuery');

module.exports = {
	...UserQuery,
	...ArtistQuery,
	...ReleaseQuery
};
