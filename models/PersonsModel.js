import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const PersonsModel = sequelize.define("persons",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tlf: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sexo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    edad: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
    
},
{
    timestamps:false
}
)