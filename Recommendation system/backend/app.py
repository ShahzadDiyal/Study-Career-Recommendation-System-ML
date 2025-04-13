from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load('model/model.pkl')  # Path to your model

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_dict = data
    feature_keys = [
        "Educational Background", "Biology", "Chemistry", "Civics",
        "Computer Science", "Economics", "English", "Fine Arts",
        "General Mathematics", "Geography", "History", "Islamic Studies",
        "Library Science", "Maths", "Pakistan Studies", "Physics",
        "Sociology", "Statistics", "Urdu"
    ]
    # Convert the input values to floats
    features = [float(input_dict[key]) for key in feature_keys]
    
    # Get the model prediction
    prediction = model.predict([features])
    
    return jsonify({'Recommended Fields': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
