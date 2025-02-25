import { Migration } from '@mikro-orm/migrations';

export class Migration20250225003246 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "pokemon" alter column "source" drop default;`);
    this.addSql(`alter table "pokemon" alter column "source" type "entity_source" using ("source"::"entity_source");`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "pokemon" alter column "source" type "entity_source" using ("source"::"entity_source");`);
    this.addSql(`alter table "pokemon" alter column "source" set default 'unknown';`);
  }

}
