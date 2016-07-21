module.exports = function(sequelize, DataTypes){
	//user model created using sequelize
	var User = sequelize.define('user', {
	username: { type: DataTypes.STRING, unique: true },
	passwordhash: DataTypes.STRING
});
	return User;
};