module.exports = (sequelize ,DataTypes)=>{
    const Registrations=  sequelize.define("Registrations",{
        Amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
    })

    Registrations.associate= (models)=>{
        Registrations.belongsTo(models.Youth,{
            foreignKey:"YouthId",
            as:"youth",
            onDelete: "cascade",  
        })
    }

    return Registrations
}