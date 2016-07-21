//definition model needs description, logtype and owner

module.exports = function (sequelize, DataTypes) {
return sequelize.define('definition',{
	description: DataTypes.STRING,
	logType: DataTypes.STRING,
	owner: DataTypes.INTEGER
});
};

/*
{definition: {
	description: 
	log time:
	owner: 
}}
*/