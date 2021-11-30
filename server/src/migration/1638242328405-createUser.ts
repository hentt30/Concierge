import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1638242328405 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table(
            {
                name:"User",
                columns: [
                    {
                        name:'id',
                        type:'uuid',
                        isPrimary:true,
                        generationStrategy:'uuid',
                        default:"void_generate_v4()"
                    },
                    {
                        name:'spotifyId',
                        type:'varchar',
                        isUnique:true, 
                    },
                    {
                        name:'createdAt',
                        type:'timestamp',
                        default:"now()" 
                    }
                ],
            }
        )
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
