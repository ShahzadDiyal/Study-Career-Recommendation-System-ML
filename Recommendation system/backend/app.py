from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import requests
import json

app = Flask(__name__)
CORS(app)

# Load your trained model
model = joblib.load('model/model.pkl')

# Define the feature keys (must match your training order)
feature_keys = [
    "Educational Background", "Biology", "Chemistry", "Civics",
    "Computer Science", "Economics", "English", "Fine Arts",
    "General Mathematics", "Geography", "History", "Islamic Studies",
    "Library Science", "Maths", "Pakistan Studies", "Physics",
    "Sociology", "Statistics", "Urdu"
]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    # Extract and convert input features
    try:
        features = [float(data[key]) for key in feature_keys]
    except KeyError as e:
        return jsonify({"error": f"Missing field: {str(e)}"}), 400
    except ValueError:
        return jsonify({"error": "All input values must be numbers"}), 400

    # Make prediction
    prediction = model.predict([features])
    return jsonify({'Recommended Fields': prediction[0]})


@app.route('/test-model', methods=['GET'])
def test_model():
    # Manual test inputs
    input1 = [3, 75, 50, 0, 85, 80, 65, 40, 70, 45, 55, 0, 0, 90, 0, 70, 30, 0, 60] 
    input2 = [5, 50, 35, 60, 15, 85, 60, 20, 0, 0, 0, 0, 25, 30, 65, 10, 75, 50, 70]

    # Get predictions
    pred1 = model.predict([input1])[0]
    pred2 = model.predict([input2])[0]

    return jsonify({
        "Test Prediction 1": pred1,
        "Test Prediction 2": pred2
    })

# OpenRouter API key and constants
OPENROUTER_API_KEY = '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'
OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'
REFERER_URL = 'http://localhost'
TITLE = 'CareerRecommendationApp'

@app.route('/better-prediction', methods=['POST'])
def better_prediction():
    try:
        data = request.get_json()

        user_content = f"""
        Student Information:
        Name: {data.get('Name', 'N/A')}
        Email: {data.get('Email', 'N/A')}
        Phone: {data.get('Phone', 'N/A')}
        Gender: {data.get('Gender', 'N/A')}
        Current Education Level: {data.get('Current Education Level', 'N/A')}
        Major: {data.get('Major', 'N/A')}
        Career Interests: {data.get('Career Interests', 'N/A')}
        Technical Skills: {data.get('Technical Skills', 'N/A')}
        Soft Skills: {data.get('Soft Skills', 'N/A')}
        Languages Known: {data.get('Languages Known', 'N/A')}
        Personality Type: {data.get('Personality Type', 'N/A')}
        Study Style: {data.get('Study Style', 'N/A')}
        Relocation Willingness: {data.get('Relocation Willingness', 'N/A')}
        Scholarship Need: {data.get('Scholarship Need', 'N/A')}
        Budget Range: {data.get('Budget Range', 'N/A')}
        Additional Notes: {data.get('Additional Notes', 'N/A')}

        Educational Background: {data.get('Educational Background', 'N/A')}
        Marks in Subjects:
        Biology: {data.get('Biology', 0)}
        Chemistry: {data.get('Chemistry', 0)}
        Civics: {data.get('Civics', 0)}
        Computer Science: {data.get('Computer Science', 0)}
        Economics: {data.get('Economics', 0)}
        English: {data.get('English', 0)}
        Fine Arts: {data.get('Fine Arts', 0)}
        General Mathematics: {data.get('General Mathematics', 0)}
        Geography: {data.get('Geography', 0)}
        History: {data.get('History', 0)}
        Islamic Studies: {data.get('Islamic Studies', 0)}
        Library Science: {data.get('Library Science', 0)}
        Maths: {data.get('Maths', 0)}
        Pakistan Studies: {data.get('Pakistan Studies', 0)}
        Physics: {data.get('Physics', 0)}
        Sociology: {data.get('Sociology', 0)}
        Statistics: {data.get('Statistics', 0)}
        Urdu: {data.get('Urdu', 0)}
        Islamic History: {data.get('Islamic History', 0)}
        Arabic: {data.get('Arabic', 0)}
        
        Considering Pakistan's evolving landscape, including its current socio-economic realities and future growth sectors, recommend the top 2 most promising career fields for
          this student, along with a concise, impactful rationale for each choice.
        """

        headers = {
            "Authorization": f"Bearer {OPENROUTER_API_KEY}",
            "Content-Type": "application/json",
            "Referer": REFERER_URL,   # <-- corrected spelling
            "X-Title": TITLE
        }

        body = {
            "model": "thudm/glm-z1-32b:free",
            "messages": [
                {
                    "role": "user",
                    "content": user_content
                }
            ]
        }

        response = requests.post(
            url=OPENROUTER_API_URL,
            headers=headers,
            data=json.dumps(body),
            timeout=30  # <-- added timeout here
        )

        if response.status_code == 200:
            result = response.json()
    
            # Check if 'choices' key exists
            if 'choices' in result:
                reply = result['choices'][0]['message']['content']
                return jsonify({"Recommended Fields": reply})
            else:
                # Log the full result for debugging
                print("Unexpected API response:", result)
                return jsonify({"error": "Unexpected API response structure"}), 500
        else:
            print(f"OpenRouter API Error: {response.text}")
            return jsonify({"error": "Failed to get response from OpenRouter API"}), 500
        
        
    except Exception as e:
                import traceback
                traceback.print_exc()
                return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)





    # from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib
# import numpy as np

# app = Flask(__name__)
# CORS(app)

# model = joblib.load('model/model.pkl')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json
#     input_dict = data
#     feature_keys = [
#         "Educational Background", "Biology", "Chemistry", "Civics",
#         "Computer Science", "Economics", "English", "Fine Arts",
#         "General Mathematics", "Geography", "History", "Islamic Studies",
#         "Library Science", "Maths", "Pakistan Studies", "Physics",
#         "Sociology", "Statistics", "Urdu"
#     ]
#     # Convert the input values to floats
#     features = [float(input_dict[key]) for key in feature_keys]
    
#     # Get the model prediction
#     prediction = model.predict_proba([features])
    
#     return jsonify({'Recommended Fields': prediction[0]})

# if __name__ == '__main__':
#     app.run(debug=True)
