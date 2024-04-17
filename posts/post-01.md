---
title: Load Balancing a NextCloud server with shared storage
date: 2024-04-20
path: nextcloud-elb
length: 9
---

Join me [**LARBI ISHAK**](https://www.linkedin.com/in/larbishak), <u> a Cloud & Software Engineer </u>, as we harness the capabilities of the **HUAWEI CLOUD** platform. Our mission? To deploy a NextCloud server with shared storage. Let's dive into this captivating journey.

---
This is our Architecture

![Lab-architecture](/nextcloud-elb-sfs/last-archi.png)

---

**The Approach ?**

We're going to build the base unit, an ECS running NextCloud and make an image from its system disk using IMS service. Then, we'll configure an AS config and AS group linked to an ELB load balancer using an HTTP lisetner.


**Building the base ECS**

Let's create an ECS with s7n.meduim.4 flavor (1vCpu, 4Gb Memory) 40 GB system disk, EIP required , Don't forget to set you root password.

Of course we are using _**Debian bookworm**_ the GOAT Distro.

**Note**: We will use **Singapore Region** for this Lab

![ECS-flavor](/nextcloud-elb-sfs/ecs-flavor.png)


After Creating the ECS you will get a summary page similar to this


![ECS-Details](/nextcloud-elb-sfs/ecs-details.png)


Note that our Public IP address is: **110.238.109.166**

We will ssh into it and install apache2 so we can host NextCloud on it.

![ECS-SSh](/nextcloud-elb-sfs/ssh-apt-update.png)

apt-get install apache2

systemctl enable --now apache2

Visit your public IP in the browser, it should be like this


![apache-web-page](/nextcloud-elb-sfs/apache-web-page.png)

Now Its working we're going to set up Next Cloud.

---

wget https://download.nextcloud.com/server/releases/latest.zip

unzip latest.zip

mv nextcloud /var/www/html

chmod -R 755 /var/www/html/nextcloud

---

![get-nextcloud](/nextcloud-elb-sfs/get-nextcloud.png)

NextCloud is built using PHP ,since our machine is fresh, we need to install php and its necessary submodules, you can find them here in the Docs **[PHP modules & Configuration](https://docs.nextcloud.com/server/latest/admin_manual/installation/php_configuration.html#php-modules)**.

--- 
apt-get install sudo # :)

sudo apt-get install php

sudo apt-get install -y php-ctype php-curl php-dom php-fileinfo php-filter php-gd php-hash php-json php-libxml php-mbstring php-openssl php-posix php-session php-simplexml php-xmlreader php-xmlwriter php-zip php-zlib

Also the Database drivers

sudo apt-get install -y php-mysql php-pgsql php-sqlite3

--- 
Now let's visit our nextcloud in IP_address/nextcloud

![NextCloud-web-page](/nextcloud-elb-sfs/nextcloud-page.png)

---

**Preparing the DB**

**Note** that the data directory in under **/var/www/html/nextcloud/data** where we'll mount later our SFS storage.

Now we need a db for nextcloud, we don't want it to be local in the ECS, so we are going to use an **RDS** instance.

Let's create one with MySql 8.0 primary/standy in the same ECS subnet and with mininum flavor :)
, Don't forget to set a strong root passowrd.

The creation will take ~5 minutes, after that your summary page should look like this

![RDS-details](/nextcloud-elb-sfs/rds-details.png)


Now we want to use the **DAS(data admin service)** to login to the db and do some SQL queries.


![DAS-login](/nextcloud-elb-sfs/das-login.png)

Now under **SQL operation > SQL query**

![DAS-query](/nextcloud-elb-sfs/das-query.png)


Let's create the db , the user and grant the privileges to the user :

---

SQL queries:

create database nextcloud;

create user 'dbuser' identified by 'Huawei@123';

grant all privileges on nextcloud.* to 'dbuser'@'%';

flush privileges;

You should not do "%": because that means **any** address, since this is a demo it's okay.

---

Let's head to our nextcloud web page and fill the DB info, also fill the NextCloud user credentials.

For example:  user: Huawei , Password: Huawei@123

![RDS-NextCloud](/nextcloud-elb-sfs/nextcloud-rds.png)


and Voilà it's working !!

![NextCloud_hello](/nextcloud-elb-sfs/nextcloud-hello.png)

Now our NextCloud server is using the RDS instance and local folder to persist data.

What we want to do is to make a shared storage for all instance in the **AS: Autoscaling group** we are going to create later.

For that purpose we'll mount an sfs storage in the data dir: /var/www/html/nextcloud/data.

---

Step by step:

1- Create the SFS storage

2- Mount the SFS storage (install nfs-utils or nfs-common according to your distro)

3- Make the mount persistent via /etc/fstab

4- Verify and troubleshoot


![SFS-pre](/nextcloud-elb-sfs/sfs-pre.png)

![SFS-details](/nextcloud-elb-sfs/sfs-details.png)

![SFS-details](/nextcloud-elb-sfs/manual-mount.png)

![SFS-details](/nextcloud-elb-sfs/mount-df.png)


Don't forget to:

touch /var/www/html/nextcloud/data/.ocdata

chown www-data:www-data /var/www/html/nextcloud/data

chmod -R 755 /var/www/html/nextcloud/data


Let's persist the mount:

![SFS-details](/nextcloud-elb-sfs/mount-etc-fstab.png)

You should reboot and ssh again to your ECS to verify its working properly.

![SFS-details](/nextcloud-elb-sfs/mount-re-ssh.png)

---

**Making the scaling**

Now our ECS is ready and everything is working properly.

Step by step:

1- Create an ECS image in IMS service

2- create an ELB with HTTP listener (No backend servers)

3- create the AS config, group

4- add AS policies


Image with NextCloud ECS's system disk


![ecs-image](/nextcloud-elb-sfs/ecs-image.png)

A Dedicated , EIP(billed by traffic), subnet: same ECS subnet **ELB Elastic Loadbalancer.** 

![ELB-summary](/nextcloud-elb-sfs/elb-details.png)

**Note**: Our ELB EIP is: **119.13.109.254**

With tcp/80 http, health check enabled  listener.

![Listener-summary](/nextcloud-elb-sfs/listener-details.png)

The AS config with the created image and s7n.meduim.4 flavor.

![Listener-summary](/nextcloud-elb-sfs/as-config.png)

An as group created with our AS config and linked with our ELB.

Instances: Max: 4 , Expected: 2 , Min: 1.

AS-policy: **add**: when MAX CPU usage > 90% for 3 occurences in 5 minutes, add 1 instance.

AS-policy: **reduce**: when MIN CPU usage < 15% for 3 occurences in 5 minutes , reduce 1 instance.

After creation and waiting for those instances to be created, you AS group summary should look like above:


![Listener-summary](/nextcloud-elb-sfs/as-group.png)



---


Whether you're a seasoned cloud engineer or just starting your journey, this blog post guided you through the process of deploying a robust and scalable NextCloud server on Huawei Cloud. By leveraging different Huawei Cloud's services (ECS, SFS, EIP, RDS, ELB , AS, VPC, SG). The implementation of auto-scaling policies ensures optimal resource allocation based on CPU usage, maximizing cost-effectiveness.


For further exploration, consider diving deeper into **[Huawei Cloud's documentation](https://www.huaweicloud.com/intl/en-us/)** to unlock the platform's full potential.

**I'd love to hear your thoughts on this approach – feel free to share your feedback and Contact me.**

---
