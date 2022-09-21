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
    },{
        timestamps:false
    })

    Youth.associate= (models)=>{
        Youth.hasMany(models.Registrations,{
            foreignKey:"YouthId",
            // as:"youthRegistration",
            onDelete: "cascade",  
        })
    };

    Youth.associate= (models)=>{
        Youth.hasMany(models.Excos,{
            
            // as:"youthExco",
            
            onDelete: "cascade",  
        })
    };


    Youth.associate= (models)=>{
        Youth.hasMany(models.Contribution,{
          
            // as:"youthContribution",
            onDelete: "cascade",  
        })
    }

    return Youth
}