from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# MySQL configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'root',
    'database': 'risk_data'
}

# Connect to MySQL
def get_db_connection():
    conn = mysql.connector.connect(**db_config)
    return conn

# Retrieve all records from risk_list
@app.route('/risk_list', methods=['GET'])
def get_risk_list():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM risk_list')
    results = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(results)

# Retrieve a single record by ID
@app.route('/risk_list/<int:id>', methods=['GET'])
def get_risk_by_id(id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute('SELECT * FROM risk_list WHERE id = %s', (id,))
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    if result:
        return jsonify(result)
    else:
        return jsonify({'error': 'Record not found'}), 404

# Add a new record to the risk_list
@app.route('/risk_list', methods=['POST'])
def add_risk():
    data = request.get_json()
    required_fields = ['Object_designation', 'Diameter_in_m', 'Impact_date_time_in_UTC', 'IP_max', 'PS_max', 'Years', 'Vel_in_km_s']

    # Check for missing fields
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing fields'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    sql = '''
    INSERT INTO risk_list (
        Object_designation, Diameter_in_m, Impact_date_time_in_UTC,
        IP_max, PS_max, Years, Vel_in_km_s
    ) VALUES (%s, %s, %s, %s, %s, %s, %s)
    '''
    cursor.execute(sql, (
        data['Object_designation'],
        data['Diameter_in_m'],
        data['Impact_date_time_in_UTC'],
        data['IP_max'],
        data['PS_max'],
        data['Years'],
        data['Vel_in_km_s']
    ))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Record added successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
