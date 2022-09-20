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
            defaultValue:DataTypes.NOW
        },
    },{
        timestamps:false
    })

   

    return Contribution
}