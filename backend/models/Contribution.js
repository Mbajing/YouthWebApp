module.exports = (sequelize ,DataTypes)=>{
    const Contribution=  sequelize.define("Contribution",{
        Amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Reason:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
    })

   

    return Contribution
}