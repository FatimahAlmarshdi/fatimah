

module.exports= (sequelize,DataTypes)=>{
    const User = sequelize.define("tbluser",{
        intUserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          /* createdAt:{
           type:DataTypes.DATE
          }, */
        strName:{
            type:DataTypes.STRING
        },
        dtmDOB:{
            type:DataTypes.DATE
        },
        strEmail:{
            type:DataTypes.STRING
        },
        strPassword:{
            type:DataTypes.STRING
        },
        binIsActive:{
            type:DataTypes.BOOLEAN
        },
    },{
            defaultActive: {
                Attributes: {exclude: ['strPassword']},
            }
        


    })
    return User
}