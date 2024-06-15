# File_viewer_site
I made site where you can see your files from chosen directory. For an API I used python Flask.<br>
I made default authentication page too, but I would definitely recommend to change it because it has low protection.<br>
<br>
<ins>***This is the architecture of my site:***<br></ins>
![photo_2024-06-15_18-19-58](https://github.com/Bl1tz2200/File_viewer_site/assets/154754925/03e70c2a-3dad-4e88-a752-98f5f0fb70d3)<br>
<br>

# Let's start
To have access for server with browser, install apache2 for your server.<br>
To have access to the folder for an API create directory *(your_dir_name)* inside */var/www/html* and use */(your_dir_name)* in ***path*** inside **site_code_inside.js**<br>
Then move all from **site_inside** and **site_outside** folders to the */var/www/html*.<br>
After that rename **site_outside.html** to **index.html**.<br>
(Of coarse you can change apache2.conf instead of renaming or you can use other Web server instead of apache2)<br>
I will recommend you to change authentication page because it is bad. I would recommend authentication with JWT token if you can do it.<br>
****DON'T FORGET TO CHANGE VALUES OF THE VARIABLES INSIDE site_code_outside.js AND site_code_inside.js!!!****<br>
<br>

# API installation
Install python3, python3-pip and python-virtualenv<br>
<br>
$  sudo apt-get install python3 python3-pip python3-virtualenv<br>
<br>
After installing virtualenv install flask:<br>
<br>
$  pip install flask<br>
<br>
Then put directory **site_server_side** anywhere, go inside it and set virtualenv flask:<br>
<br>
$  cd site_server_side<br>
$  sudo virtualenv flask<br>
<br>
After all, change api.config\['UPLOAD_FOLDER'\] value to */var/www/html/(your_dir_name)* 
Your API is ready to work.<br>
Run:<br>
$  sudo ./app.py<br>
And your API will start working. All needed information will be displayed in the terminal.<br>
You should add ip and port of an API to the site_code_inside.js<br>
****DON'T FORGET TO CHANGE VALUE OF api.config\['UPLOAD_FOLDER'\] TO /var/www/html/(your_dir_name)!!!****<br>

# What after
Now you can run apache2:<br>
$  systemctl start apache2<br>
And see your File viwer site on you ip address.<br>
I used it with VPN to have secure cloud vault for my files and backups.<br>



