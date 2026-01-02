"""
Sample H5 Model Template for Pet Breed Classification
This is a template file to demonstrate the expected structure of the .h5 model file.

To create an actual .h5 model, follow these steps:

1. Install required libraries:
   pip install tensorflow keras numpy pillow

2. Train your model using TensorFlow/Keras:
"""

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import numpy as np

def create_sample_pet_breed_model():
    """
    Creates a sample CNN model for pet breed classification.
    This is a template - replace with your actual trained model.
    """
    
    # Define model architecture
    model = keras.Sequential([
        # Input layer - expects 224x224x3 images
        layers.Input(shape=(224, 224, 3)),
        
        # Convolutional layers
        layers.Conv2D(32, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.MaxPooling2D((2, 2)),
        
        # Flatten and Dense layers
        layers.Flatten(),
        layers.Dense(512, activation='relu'),
        layers.Dropout(0.5),
        
        # Output layer - adjust num_classes based on your breeds
        layers.Dense(120, activation='softmax')  # 120 dog breeds
    ])
    
    # Compile the model
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

def save_model_template():
    """
    Saves a template model to .h5 format
    """
    model = create_sample_pet_breed_model()
    
    # Save the model architecture and random weights
    model.save('pet_breed_classifier.h5')
    print("Template model saved as pet_breed_classifier.h5")
    
    # Print model summary
    model.summary()

if __name__ == "__main__":
    # Instructions to create and save the model
    print("=" * 60)
    print("PET BREED CLASSIFICATION MODEL TEMPLATE")
    print("=" * 60)
    print("\nTo create the actual .h5 model file:")
    print("1. Prepare your dataset with labeled pet images")
    print("2. Train the model using your dataset")
    print("3. Save the trained model using model.save('model_name.h5')")
    print("\nFor now, uncomment the line below to create a template:")
    print("save_model_template()")
    print("\nNote: This template has random weights.")
    print("Train it with actual data for real predictions.")
    print("=" * 60)
    
    # Uncomment to create template model:
    # save_model_template()

"""
Expected .h5 Model File Structure:
-----------------------------------

Your trained model should:
1. Accept input images of size 224x224x3 (RGB images)
2. Output probabilities for each breed class
3. Be saved using: model.save('pet_breed_classifier.h5')

Example usage after training:
------------------------------

# Load the trained model
from tensorflow import keras
model = keras.models.load_model('pet_breed_classifier.h5')

# Make predictions
import numpy as np
from PIL import Image

# Load and preprocess image
img = Image.open('pet_image.jpg')
img = img.resize((224, 224))
img_array = np.array(img) / 255.0
img_array = np.expand_dims(img_array, axis=0)

# Predict
predictions = model.predict(img_array)
predicted_class = np.argmax(predictions[0])

print(f"Predicted breed class: {predicted_class}")
"""
