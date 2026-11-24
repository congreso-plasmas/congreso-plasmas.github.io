#!/usr/bin/env bash
# Descarga los originales (1920 px) desde Wikimedia Commons a ./raw para re-procesarlos.
set -e; mkdir -p raw
while IFS='|' read -r name path; do
  f=$(basename "$path")
  curl -sL -A "CongresoPlasmasSite/0.1" -o "raw/$name.jpg" \
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/${path}/1920px-${f}"; echo "$name"; sleep 1
done <<'LIST'
faro-dia|1/10/Faro_Monumental_de_La_Serena._08.12.2022.jpg
faro-atardecer|a/ab/Atardecer_en_el_Faro_de_la_Serena._A740469.jpg
sprites-la-silla|0/0a/Sprites_at_La_Silla_Observatory_%28potw1505d%29.jpg
la-silla-noche|c/c0/La_Silla_at_night_%28beletsky_lasilla_05%29.jpg
tololo-via-lactea|f/f2/Milky_Way_over_Cerro_Tololo_Inter-American_Observatory_%28noao-milky-way-tololo%29.jpg
valle-elqui|7/7d/Valle_del_Elqui_3.JPG
gemini-sur|2/27/Sunset_over_Gemini_South_%28gemini-20050829-gemini-south-sunset-0001%29.jpg
rubin-pachon|4/49/Rubin_Observatory_on_Cerro_Pach%C3%B3n_%28Pachon-Drone-pano-1-CC%29.jpg
jardin-japones|e/ec/La_Serena_-_Jardin_Japon%C3%A9s_2017.jpg
catedral|f/f3/Catedral_de_La_Serena_1.JPG
pisco-elqui|8/8a/Pisco_elqui_pano3.jpg
bahia-coquimbo|8/86/Bahia_de_Coquimbo_y_La_Serena.JPG
mamalluca|0/01/Nocturna_mamalluca_obs.jpg
LIST
