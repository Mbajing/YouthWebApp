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
            allowNull:true
        },
        presidentRemark:{
            type:DataTypes.STRING,
            allowNull:true

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