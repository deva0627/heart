from flask import Flask, render_template, jsonify

app = Flask(__name__)

# I Love You in 20 Languages
love_messages = [
    {"language": "English", "message": "I Love You ❤️"},
    {"language": "Tamil", "message": "நான் உன்னை காதலிக்கிறேன் ❤️"},
    {"language": "Hindi", "message": "मैं तुमसे प्यार करता हूँ ❤️"},
    {"language": "French", "message": "Je t'aime ❤️"},
    {"language": "Spanish", "message": "Te amo ❤️"},
    {"language": "German", "message": "Ich liebe dich ❤️"},
    {"language": "Italian", "message": "Ti amo ❤️"},
    {"language": "Japanese", "message": "愛してる ❤️"},
    {"language": "Korean", "message": "사랑해 ❤️"},
    {"language": "Chinese", "message": "我爱你 ❤️"},
    {"language": "Arabic", "message": "أحبك ❤️"},
    {"language": "Telugu", "message": "నేను నిన్ను ప్రేమిస్తున్నాను ❤️"},
    {"language": "Malayalam", "message": "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു ❤️"},
    {"language": "Kannada", "message": "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ ❤️"},
    {"language": "Portuguese", "message": "Eu te amo ❤️"},
    {"language": "Russian", "message": "Я тебя люблю ❤️"},
    {"language": "Turkish", "message": "Seni seviyorum ❤️"},
    {"language": "Thai", "message": "ฉันรักคุณ ❤️"},
    {"language": "Bengali", "message": "আমি তোমাকে ভালোবাসি ❤️"},
    {"language": "Urdu", "message": "میں تم سے محبت کرتا ہوں ❤️"}
]


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/messages")
def messages():
    return jsonify(love_messages)


if __name__ == "__main__":
    app.run(debug=True)