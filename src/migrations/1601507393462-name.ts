import {MigrationInterface, QueryRunner} from "typeorm";

export class name1601507393462 implements MigrationInterface {
    name = 'name1601507393462'

    

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
        await queryRunner.query(`CREATE TABLE "stadium" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "stadiumImage" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "locationId" uuid, CONSTRAINT "UQ_c14b0495f7e40f2edfa6f0589d4" UNIQUE ("name"), CONSTRAINT "PK_e1fec3f13003877cd87a990655d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "country" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f0336eb8ccdf8306e270d400cf0" UNIQUE ("name"), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "stadium" ADD CONSTRAINT "FK_db5076338aa96b6ff460677bdb3" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stadium" DROP CONSTRAINT "FK_db5076338aa96b6ff460677bdb3"`);
        await queryRunner.query(`DROP TABLE "location"`);
        await queryRunner.query(`DROP TABLE "stadium"`);
    }

}
