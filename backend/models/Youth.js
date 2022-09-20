module.exports = (sequelize ,DataTypes)=>{
    const Youth=  sequelize.define("Youth",{
        firstname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type:DataTypes.STRING,
            allowNull:false
        },
        location:{
            type:DataTypes.STRING,
            allowNull:false

        },
        occupation:{
            type:DataTypes.STRING,
            allowNull:false

        },
    })

    Youth.associate= (models)=>{
        Youth.hasMany(models.Registration,{
            foreignKey:"YouthId",
            as:"youthRegistration",
            onDelete: "cascade",  
        })
    };

    Youth.associate= (models)=>{
        Youth.hasMany(models.Exco,{
            foreignKey:"YouthId",
            as:"youthExco",
            
            onDelete: "cascade",  
        })
    };


    Youth.associate= (models)=>{
        Youth.hasMany(models.Contribution,{
            foreignKey:"YouthId",
            as:"youthContribution",
            onDelete: "cascade",  
        })
    }

    return Youth
}