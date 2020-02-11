const jwt = require('jsonwebtoken');
const { getUserByID } = require('../services/UserService');

const SECRET = '0x381a1c1e6977a53b33e69a9e6f7e50278981e3c6';

module.exports = async(request) => {
	const Authorization = request.get('Authorization');
	if(Authorization){// Authorization: JWT lashfddjfskdfhksdjhfjksdhfjksdhkfsdhkjhsdjk
		const formatedToken  = Authorization.replace('JWT ','');
		const payload =  jwt.verify(formatedToken,SECRET);
		if(!payload) return request;
		const user  = await getUserByID(payload.id);
		if(!user) return request;
		return {...request,user};
	}else{
		return request;
	}

};