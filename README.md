# Deploying a Node Js Application on AWS EC2

### Testing the project locally/devlopment

1. Clone this project

```
git clone https://github.com/soumikroyfreelancer1/aws_first_app.git
```

2. Setup the following environment variables - `(.env)` file

```
PORT=3000
NODE_ENV=development
API_KEY=your-secret-key-here
GREETING=Hello from Environment Variables!
```

3. Initialise and start the project

```
npm install
npm run dev
```

<br>

### Set up an AWS EC2 instance

1. Create an IAM user & login to your AWS Console
   - Access Type - Password
   - Permissions - Admin
2. Create an EC2 instance
   - Select an OS image - Ubuntu
   - Create a new key pair & download `.pem` file
   - Instance type - t2.micro
3. Connecting to the instance using ssh

```
ssh -i instance.pem ubunutu@<IP_ADDRESS>
```

<br>

### Configuring Ubuntu on remote VM

1. Updating the outdated packages and dependencies

```
sudo apt update
```

3. Install Git - [Guide by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-22-04)
4. Configure Node.js and `npm` - [Guide by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04)

<br>

### Deploying the project on AWS

1. Clone this project in the remote VM

```
git clone https://github.com/soumikroyfreelancer1/aws_first_app.git
```

2. Setup the following environment variables - `(.env)` file

```
PORT=3000
NODE_ENV=production
API_KEY=your-secret-key-here
GREETING=Hello from Environment Variables!
```

> For this project, we'll have to set up an [Elastic IP Address](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html) for our EC2 & that would be our `DOMAIN`

3. Initialise and start the project

```
npm install
npm run start
```

> NOTE - We will have to edit the **inbound rules** in the security group of our EC2, in order to allow traffic from our particular port

<br>

### Project is deployed on AWS 🎉
