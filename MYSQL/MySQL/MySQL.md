# Using MySQL

## Windows

Start the MySQL service (from Task Manager)

## Linux

```shell
sudo service mysql start
```

## MacOS

Go To Settings > MySql > Start MySQL Service

or (if installed in Homebrew)
 
```shell
mysql.service start
```

## Log In to MySQL as root

Without root password - 

```shell/cmd
mysql -u root
mysql>
```

With root password -

```shell/cmd
mysql -u root -p
Enter Password:

mysql>
```
 
 ## Create DB, User, Grant Access

 ```sql Commands 
 CREATE DATABASE testdb;

 CREATE USER myuser IDENTIFIED BY 'testdata';

 USE testdb;   

 GRANT ALL PRIVILEGES ON testdb.* TO myuser;

 FLUSH PRIVILEGES;
```

## Login using the new user
 
 ```shell/cmd
 mysql -u myuser -p
 Enter Password: (enter 'testdata' here)

 mysql>
 ```