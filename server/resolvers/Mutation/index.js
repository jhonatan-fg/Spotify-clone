const UserMutation = require('./UserMutation');
//const ReleaseMutation = require('./ReleaseMutation')
const ArtistMutation = require('./ArtistMutation')
module.exports = {
	...UserMutation,
	...ArtistMutation,
//	...ReleaseMutation
};