from flask import Flask, redirect
import json

app = Flask(__name__)

linksFp = open("links.json")
LINKS = json.load(linksFp)

@app.route("/go/<path:path>")
def go(path):
    return redirect(LINKS[path])

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000)