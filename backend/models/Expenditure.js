module.exports = (sequelize ,DataTypes)=>{
    const Expenditure=  sequelize.define("Expenditure",{
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

   

    return Expenditure
}