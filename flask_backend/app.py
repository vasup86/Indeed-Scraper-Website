from dis import dis
import backend 
from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route("/scrape", methods=["POST","GET"], strict_slashes=False)
def add_data():
    #getting the data as POST 
    title = request.json['title']
    location = request.json['location']
    pages = request.json['pages']
    distance = request.json['distance']
    date = request.json['date']

    #processing data
    dataObject = backend.Backend(title, location, pages, distance, date)
    data = dataObject.scrape()
    #print(data)
    return jsonify(results = data)

if __name__ == '__main__':
    app.run(debug=True)