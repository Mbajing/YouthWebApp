module.exports = (sequelize ,DataTypes)=>{
    const Attendance=  sequelize.define("Attendance",{
       
      
        numberPresent:{
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

   

    return Attendance
}