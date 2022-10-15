import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
    //name: 'xptos',
    modelName: 'client-person',
    tableName: 'person2'
})
export class Person extends Model {
  @Column
  name: string;
}