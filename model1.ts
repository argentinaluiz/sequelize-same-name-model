import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table({
    modelName: 'xpto-person',
    tableName: 'person1'
})
export class Person extends Model {
  @Column
  name: string;
}