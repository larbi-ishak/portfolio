---
title: Load Balancing a NextCloud server with shared storage
date: 2024-04-20
path: nextcloud-elb
length: 9
---

Join me [**LARBI ISHAK**](https://www.linkedin/in/larbishak), <u> a Cloud & Software Engineer </u>, as we harness the capabilities of the **HUAWEI CLOUD** platform. Our mission? To deploy a NextCloud server with shared storage. Let's dive into this captivating journey.

---
This is our Architecture

![Lab-architecture](/nextcloud-elb-sfs/last-archi.png)

---

# The Approach ?

We gonna build the base unit, an ECS running NextCloud and make an image from its system disk using IMS service and then configure an AS config and AS group linked to an ELB load balancer using an HTTP listner.


# Building the base ECS

* let's create an ECS with s7n.meduim.4 flavor (1vCpu, 4Gb Memory) 40 GB system disk, EIP required , Don't forget to set you root password

> Of course we are using _**Debian bookworm**_ the GOAT Distro

**Note**: We will use **Singapore Region** for this Lab

![ECS-flavor](/nextcloud-elb-sfs/ecs-flavor.png)


after Creating the ECS you will get a summary page similar to this


![ECS-Details](/nextcloud-elb-sfs/ecs-details.png)


Note that our Public IP address: 110.238.109.166

we will ssh into it and install apache2 so we can host NextCloud on it

![ECS-SSh](/nextcloud-elb-sfs/ssh-apt-update.png)

apt-get install apache2

systemctl enable --now apache2

and visit your public IP in the browser, it should be like this


![apache-web-page](/nextcloud-elb-sfs/apache-web-page.png)

Now Its working we gonna set up Next Cloud 

wget https://download.nextcloud.com/server/releases/latest.zip

unzip latest.zip

mv nextcloud /var/www/html

chmod -R 777 /var/www/html/nextcloud

![get-nextcloud](/nextcloud-elb-sfs/get-nextcloud.png)

NextCloud is built using PHP ,since our machine is fresh, we need to install php and necessary modules, you can find them here in the Docs **[PHP modules & Configuration](https://docs.nextcloud.com/server/latest/admin_manual/installation/php_configuration.html#php-modules)**

--- 
apt-get install sudo :)

sudo apt-get install php

sudo apt-get install -y php-ctype php-curl php-dom php-fileinfo php-filter php-gd php-hash php-json php-libxml php-mbstring php-openssl php-posix php-session php-simplexml php-xmlreader php-xmlwriter php-zip php-zlib

Also the Database drivers

sudo apt-get install -y php-mysql php-pgsql php-sqlite3

--- 
Now let's visit our nextcloud in IP_address/nextcloud

![NextCloud-web-page](/nextcloud-elb-sfs/nextcloud-page.png)

---

# Preparing the DB

**Note** that the data directory in under **/var/www/html/nextcloud/data** where we'll mount later our SFS storage

Now we need a db for nextcloud, we don't want it to be local in the ECS, so we gonna use an **RDS** instance

Let's create one with MySql 8.0 primary/standy in the same ECS subnet and with mininum flavor :)
, Don't forget to set a strong root passowrd.

The creation will take ~5 minutes, after that your summary page should look like this

![RDS-details](/nextcloud-elb-sfs/rds-details.png)


Now we wanna use the **DAS(data admin service)** to login to the db and do some SQL queries


![DAS-login](/nextcloud-elb-sfs/das-login.png)

Now under SQL operation > SQL query

![DAS-query](/nextcloud-elb-sfs/das-query.png)


Let's create the db , the user and grant the privileges to the user

---

SQL queries:

create database nextcloud;

create user 'dbuser' identified by 'Huawei@123';

grant all privileges on nextcloud.* to 'dbuser'@'%';

flush privileges;

You should not do "%": because that means **any** address, since this is a demo it's okay

---

Let's head to our nextcloud web page and fill the DB info, also fill the NextCloud user credentials

For example:  user: Huawei , Passowrd: Huawei@123

![RDS-NextCloud](/nextcloud-elb-sfs/nextcloud-rds.png)


and Voilà it's working !!

![NextCloud_hello](/nextcloud-elb-sfs/nextcloud-hello.png)

Now our NextCloud server is using the RDS instance and local folder to persist data

what we want to do is to make a shared storage for all instance in the **AS: Autoscaling group** we are going to create later 

for that purpose we'll mount an sfs storage in the data dir: /var/www/html/nextcloud/data

step by step:

1- Create the SFS storage

2- Mount the SFS storage (install nfs-utils or nfs-common according to your distro)

3- Make the mount persistent via /etc/fstab

4- Verify and troubleshoot
