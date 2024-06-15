# File_viewer_site
I made site where you can see your files from chosen directory. For an API I used python Flask.<br>
I made default authentication page too, but I would definitely recommend to change it because it has low protection.

# Let's start
To have access for server with browser, install apache2 for your server.<br>
To have access to the folder for an API create directory *(your_dir_name)* inside */var/www/html* and use */(your_dir_name)* in ***path*** inside **site_code_inside.js**<br>
Then move all from **site_inside** and **site_outside** folders to the */var/www/html*.<br>
After that rename **site_outside.html** to **index.html**.<br>
(Of coarse you can change apache2.conf instead of renaming or you can use other Web server instead of apache2)<br>
<br>
Then install python3, python3-pip and python-virtualenv
