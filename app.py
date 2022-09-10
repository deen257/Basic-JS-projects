from flask import Flask, render_template

app = Flask(__name__)

@app.route("/color-flipper")
def simple():
    return render_template("simple.html")

@app.route("/hex")
def hex():
    return render_template("hex.html")

@app.route("/review")
def reviews():
    return render_template("review.html")

@app.route("/nav")
def nav():
    return render_template("nav.html")

@app.route("/side")
def side():
    return render_template("side.html")

@app.route("/modal")
def modal():
    return render_template("modal.html")

@app.route("/questions")
def question():
    return render_template("questions.html")

@app.route("/menu")
def menu():
    return render_template("menu.html")

@app.route("/video")
def video():
    return render_template("video.html")

@app.route("/scroll")
def scroll():
    return render_template("scroll.html")

@app.route("/tab")
def tab():
    return render_template("tab.html")

@app.route("/countdown")
def countdown():
    return render_template("countdown.html")

@app.route("/grocery")
def grocery():
    return render_template("grocery.html")


@app.route("/lorem")
def lorem():
    return render_template("lorem.html")

@app.route("/sidebar")
def sidebar():
    return render_template("sidebar.html")
