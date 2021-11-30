import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPlaylist1638242341621 implements MigrationInterface {

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
                        name:'userId',
                        type:'varchar',
                    },
                    {
                        name:'name',
                        type:'varchar',
                    },
                    {
                        name:'genre',
                        type:'varchar',
                    },
                    {
                        name:'link',
                        type:'varchar',
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
