#!/bin/bash
say() { local IFS=+;/usr/bin/mplayer -ao alsa -really-quiet -noconsolecontrols "http://translate.google.com.mx/translate_tts?ie=UTF-8&client=tw-ob&q=$*&tl=es"; }
say $*

