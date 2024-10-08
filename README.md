# File_viewer_site
I made site where you can see your files from chosen directory. For an API I used python Flask.<br>
As server OS I used Ubuntu 22.04.<br>
<br>

# Let's start
To have access for server with browser, install apache2 for your server.<br>
<br>
To have access to the folder for an API create directory *(your_dir_name)* inside */var/www/html* and use */(your_dir_name)* in ***path*** inside **site_code_inside.js**.<br>
<br>
****You need to specify some variables inside site_code_inside.js****<br>
<br>
Then move all from **Frontend**  folder to the */var/www/html*.<br>
<br>
After that rename **site_inside.html** to **index.html**.<br>
(Of coarse you can change apache2.conf instead of renaming or you can use other Web server instead of apache2)<br>
<br>

# API installation
Install python3, python3-pip and python-virtualenv:<br>
<br>
```$  sudo apt-get install python3 python3-pip python3-virtualenv```<br>
<br>
After installing virtualenv install flask:<br>
<br>
```$  pip install flask```<br>
<br>
Then put directory **Backend** anywhere, go inside it and set virtualenv flask:<br>
<br>
<pre>
$  cd site_server_side
$  sudo virtualenv flask</pre><br>

After all, change api.config\['UPLOAD_FOLDER'\] value to */var/www/html/(your_dir_name)*.<br>
And don't forget to specify values of **ip_api** and **port_api** inside *app.py*
Your API is ready to work.<br>
Run:<br>
<br>
```$  ./app.py```<br>
<br>
And your API will start working. All needed information will be displayed in the terminal.<br>
You should add ip and port of an API to the site_code_inside.js.<br>
<br>
Remember, that you should run app.py only from folder where you have placed it. (First you should cd to it, and them run ./app.py)<br>
<br>
If you have troubles with flask try removing *python3 python3-pip python3-virtualenv* and *flask virtualenv*<br>
<br>

# Security
I would definitely recommend to add authentication. I used Basic Auth for apache2:<br>
Create new user with password:<br>
<br>
```$  htpasswd -cm /ENTER/YOUR/PATH/WHERE/WILL/SAVE/.htpasswd  YOUR_USER```<br>
<br>
Then create file *.htaccess* inside /var/www/html and write inside it (don't forget to change AuthUserFile path:<br>
<br>
<pre>
$  sudo touch /var/www/html/.htaccess
$  printf 'AuthType Basic\nAuthName "Secure Content"\nAuthUserFile /ENTER/YOUR/PATH/TO/.htpasswd\nrequire valid-user' | sudo tee /var/www/html/.htaccess</pre><br>

After that add *AllowOverride AuthConfig* for your site directory (*/var/www/html*) inside your site config in apache2:<br>
<br>
```$  sudo vi /etc/apache2/sites-available/YOUR_SITE.conf```<br>
<br>
Add this lines after \</VirtualHost\>:<br><br>


<Directory /var/www/html/ ><br>
&emsp;&emsp;&emsp;AllowOverride AuthConfig<br>
\</Directory\><br>


<br>Then enable YOUR_SITE.conf:<br>
<br>
```$  sudo a2ensite YOUR_SITE.conf```<br>
<br>
Now your site will have Basic Auth with login and password.<br>
<br>

# What after
Run apache2:<br>
<br>
```$  systemctl start apache2```<br>
<br>
And see your File viwer site on you ip address.<br>
<i>I used this site with VPN to have secure cloud vault for my files and backups.</i><br>
<br>

<div align="center">
  <h1>Screenshots</h1>
  <div>
    <img src="https://github.com/user-attachments/assets/35e7539d-88e6-49d1-b9f2-ce11c0d53a12" width="405vw" height="202.5vw">
    <img src="https://github.com/user-attachments/assets/674ecc7b-4439-4851-9cb3-753b09050379" width="405vw" height="202.5vw">
  </div>
  <img src="https://github.com/user-attachments/assets/11098715-4b98-4994-9ba5-d9a958fdd791" width="405vw" height="202.5vw">
  <div>
    <img src="https://github.com/user-attachments/assets/ae8d6c6a-a4b1-4436-bb69-292a64adac97" width="405vw" height="202.5vw">
    <img src="https://github.com/user-attachments/assets/745d81ca-4777-4d1b-81f0-8bc36c2598c4" width="405vw" height="202.5vw">
  </div>
</div>
