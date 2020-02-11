const jwt = require('jsonwebtoken');

const SECRET = '0x381a1c1e6977a53b33e69a9e6f7e50278981e3c6';

module.exports = (user) => {

	const payload = {
		id:user._id,
		email:user.email,
		first_name:user.first_name
	};
    
	return jwt.sign(payload, SECRET,{expiresIn:'1d'});

};