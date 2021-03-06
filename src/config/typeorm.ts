import * as path from 'path';

export default {
  retryAttempts: 10,
  type: process.env.TYPEORM_CONNECTION || 'postgres',
  host: process.env.TYPEORM_HOST || 'localhost',
  port: Number(process.env.TYPEORM_PORT || 5432),
  username: process.env.TYPEORM_USERNAME || 'postgres',
  password: process.env.TYPEORM_PASSWORD || 'huameow_Grimm_Law_admin_123',
  database: process.env.TYPEORM_DATABASE || 'postgres',
  logging: process.env.TYPEORM_LOGGING || true,
  entities: [
    path.resolve(
      __dirname,
      '..',
      process.env.TYPEORM_ENTITIES || '**/*.entity{.ts,.js}',
    ),
  ],
  synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE || true),
  migrationsTableName: 'custom_migration_table',
  migrations: [
    path.resolve(
      __dirname,
      '..',
      process.env.TYPEORM_ENTITIES || 'migrations/*.entity{.ts,.js}',
    ),
  ],
};
