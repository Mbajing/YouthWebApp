module.exports = (sequelize ,DataTypes)=>{
    const Events=  sequelize.define("Events",{
        eventName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        attendance:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Date:{
            type:DataTypes.DATEONLY,
            allowNull:false
        },
        presidentRemark:{
            type:DataTypes.STRING,
            allowNull:false

        },
        secretaryRemark:{
            type:DataTypes.STRING,
            allowNull:false

        },
    },{
        timestamps:false
    })

    // Events.associate= (models)=>{
    //     Events.hasMany(models.Registration,{
    //         onDelete: "cascade",  
    //     })
    // }

    return Events
}