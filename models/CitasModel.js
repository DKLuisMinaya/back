
import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";
import {UserModel} from "./UserModel.js"


export const CitasModel = sequelize.define("citas",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER,
    },
    doc:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fecha:{
        type:DataTypes.DATEONLY,
        allowNull:false,
        },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
},
{
    timestamps:false
}
);

