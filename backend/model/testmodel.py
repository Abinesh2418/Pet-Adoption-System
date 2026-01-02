from flask import Flask, request, render_template, jsonify
import os
import cv2
import numpy as np
import tensorflow as tf

app = Flask(__name__,template_folder="template")

UPLOAD_FOLDER = "uploads"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Load model and labels
modelFile = "dogs.h5"
model = tf.keras.models.load_model(modelFile)
allLabels = np.load("allDogsLables.npy")
categories = np.unique(allLabels)

inputShape = (331, 331)

# Function to preprocess image
def prepareImage(imagePath):
    img = cv2.imread(imagePath)
    resized = cv2.resize(img, inputShape, interpolation=cv2.INTER_AREA)
    imgResult = np.expand_dims(resized, axis=0)
    imgResult = imgResult / 255.0
    return imgResult

@app.route("/")
def index():
    return render_template("imageres.html")

@app.route("/upload", methods=["POST"])
def upload():
    if "image" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["image"]
    file_path = os.path.join(UPLOAD_FOLDER, "uploaded_image.jpg")
    file.save(file_path)

    # Process image and predict
    imageForModel = prepareImage(file_path)
    resultArray = model.predict(imageForModel, verbose=0)
    answer = np.argmax(resultArray, axis=1)
    text = categories[answer[0]]

    return jsonify({"prediction": text})

if __name__ == "__main__":
    app.run(debug=True)
