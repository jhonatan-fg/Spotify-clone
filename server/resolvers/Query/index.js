const UserQuery = require('./UserQuery');
const ArtistQuery = require('./ArtistQuery');

module.exports = {
	...UserQuery,
	...ArtistQuery
};
