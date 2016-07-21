//definition model needs description, logtype and owner

module.exports = function (sequelize, DataType) {
return sequelize.define('definition',{
	description: DataType.STRING,
	logType: DataType.STRING,
	owner: DataType.INTEGER
});
};

/*
{definition: {
	description: 
	log time:
	owner: 
}}
*/