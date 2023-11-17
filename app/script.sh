#!/bin/bash

activate_venv() {
    . /home/erick/Área\ de\ Trabalho/finesup/api/venv/bin/activate
}

activate_venv
export PYTHONPATH=${PYTHONPATH}:/home/erick/Área\ de\ Trabalho/finesup
python3 /home/erick/Área\ de\ Trabalho/finesup/api/src/main.py