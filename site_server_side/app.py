#!flask/local/bin/python
from flask import Flask, render_template, request, make_response, Response
import os

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = '/var/www/html/data'

@app.route('/upload-file', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        file = request.files['file']
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        response = Response("File upload successfully")
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

@app.route('/get-files', methods=['GET'])
def get_files():
    if request.method == 'GET':
        files = ""
        files_list = os.listdir(app.config['UPLOAD_FOLDER']) 
        for i in files_list:
            files = files + i + ";"
        if files != "":
            arr = Response(files)
        else:
            arr = Response("No files found")
        arr.headers['Access-Control-Allow-Origin'] = '*'
        return arr

@app.route('/remove-file/<string:file>', methods=['POST'])
def remove_files(file):
    if request.method == 'POST':
        os.remove(app.config['UPLOAD_FOLDER'] + "/" + file)
        response = Response("File deleted successfully")
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

if __name__ == "__main__":
    app.run(host="25.60.122.48", port=8080)
