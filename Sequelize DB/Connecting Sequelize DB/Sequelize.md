# DATABASES: Sequelize Basics

## Setup Database

Open mysql shell
```shell
$ mysql -u root -p
```


INSIDE MySQL shell, craete database. user and grant rights
```
mysql-sql


CREATE DATABASE sampledb;

CREATE USER sampleuser IDENTIFIED BY 'samplepass';

GRANT ALL PRIVILEGES ON sampledb.* to sampleuser

```
Login in with

```
$ mysql -u sampleuser -p 

Enter Password: samplepass

```
