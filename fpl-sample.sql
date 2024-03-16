-- Adminer 4.8.1 PostgreSQL 13.4 (Debian 13.4-4.pgdg110+1) dump

DROP TABLE IF EXISTS "tfpdh004_carinfo_mntitem";
CREATE TABLE "public"."tfpdh004_carinfo_mntitem" (
    "dysh_kbn" integer,
    "fpls_car_id" integer
) WITH (oids = false);

INSERT INTO "tfpdh004_carinfo_mntitem" ("dysh_kbn", "fpls_car_id") VALUES
(NULL,	10989900),
(2,	10989901);

DROP TABLE IF EXISTS "tfpdh005_carinfo_mntflg";
CREATE TABLE "public"."tfpdh005_carinfo_mntflg" (
    "leaseorginfo16" character(50),
    "fpls_car_id" integer,
    "cmfactory_id" integer
) WITH (oids = false);

INSERT INTO "tfpdh005_carinfo_mntflg" ("leaseorginfo16", "fpls_car_id", "cmfactory_id") VALUES
('0                                                 ',	10989900,	1000000),
('0                                                 ',	10989901,	1000000),
('1                                                 ',	10989901,	1000001),
(NULL,	10989900,	1000003),
(NULL,	10989901,	1000004);

-- 2024-03-14 04:10:28.795593+00
