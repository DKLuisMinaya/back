import { DataTypes } from "sequelize";
import { sequelize } from "../db/conexion.js";

export const PruebaModel = sequelize.define("prueba",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
            nombre: {
                type: DataTypes.STRING(100),
                allowNull: false
                },
            state:{
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }

            },
            {
                timestamps: false
            }
);
