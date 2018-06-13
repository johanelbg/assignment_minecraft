import os
from os import environ as env
from sys import argv


import bottle as b
from bottle import route, run, get



DEBUG = os.environ.get("DEBUG")

b.debug(False)


@route('/')
def index():
    return b.template('minecraft.html')


@get('/JS/<filename:re:.*\.js>')
def javascript(filename):
    return b.static_file(filename, root='js')


@get('/CSS/<filename:re:.*\.css>')
def stylesheets(filename):
    return b.static_file(filename, root='css')


@get('/sounds/<filename:re:.*\.(mp3)>')
def images(filename):
    return b.static_file(filename, root='sounds')


def main():
    if DEBUG:
        b.run(host='localhost', port=7000)
    else:
        b.run(host='0.0.0.0', port=argv[1])


if __name__ == '__main__':
    main()
