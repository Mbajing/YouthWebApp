module.exports = (sequelize ,DataTypes)=>{
    const Excos =  sequelize.define("Excos",{
        position:{
            type:DataTypes.STRING,
            allowNull:false
        },
        termOfOffice:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })


    Excos.associate= (models)=>{
        Excos.belongsTo(models.Youth,{
            foreignKey:"YouthId",
            as:"youth",
            onDelete: "cascade",  
        })
    }

   
    return Excos
}