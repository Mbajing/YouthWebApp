module.exports = (sequelize ,DataTypes)=>{
    const Income=  sequelize.define("Income",{
        Amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Source:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
    })

   

    return Income
}