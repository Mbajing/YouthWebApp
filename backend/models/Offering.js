module.exports = (sequelize ,DataTypes)=>{
    const Offering=  sequelize.define("Offering",{
        Amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Date:{
            type:DataTypes.DATEONLY,
            allowNull:false,
            defaultValue:DataTypes.NOW
        },
    })

   

    return Offering
}