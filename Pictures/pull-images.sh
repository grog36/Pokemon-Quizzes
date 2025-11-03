#!/bin/bash


for i in {1..493}
do
    if [ $i -lt 10 ]; then
        wget "https://www.serebii.net/pokemon/art/00$i.png";
    elif [ $i -lt 100 ]; then
        wget "https://www.serebii.net/pokemon/art/0$i.png";
    elif [ $i -gt 99 ]; then
        wget "https://www.serebii.net/pokemon/art/$i.png";
    fi
done
