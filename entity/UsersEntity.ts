import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert,
} from "typeorm";

import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { nullable: true })
  @Length(3, 25)
  name: string;

  @Column("text", { nullable: true })
  email: string;

  @Column("text", { nullable: true })
  password: string;

  @Column("text", { nullable: true })
  createdAt: Date;

  @BeforeInsert()
  addTimestamp() {
    this.createdAt = new Date();
  }
}
