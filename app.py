#THIS IS FOR BACKEND AND ITS USING FLASK TO CONNECT THE DATABSE TO THE FRONTEND

from flask import Flask, render_template, jsonify
import sqlite3

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/neo-data')
def neo_data():
    conn = sqlite3.connect('neo.db')
    cur = conn.cursor()
    cur.execute('SELECT * FROM neos LIMIT 50')
    data = cur.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
