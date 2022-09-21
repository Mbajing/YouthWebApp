module.exports = (sequelize ,DataTypes)=>{
    const Registrations=  sequelize.define("Registrations",{
        Amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Date:{
            type:DataTypes.DATEONLY,
            defaultValue:DataTypes.NOW
        },
    },{
        timestamps:false
    })

    Registrations.associate= (models)=>{
        Registrations.belongsTo(models.Youth,{
            foreignKey:"YouthId",
            
            onDelete: "cascade",  
            onUpdate: "cascade",  
        })
    }

    return Registrations
}