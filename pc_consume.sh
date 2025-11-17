#!/bin/bash

# USAGE
# Define each application you want to track on apps list
#
# 1. 
# 	source pc_consume.sh;
# 	consume_apps;
# 	OR for watch
# 	wca 1
# 2.
# 	Change the script and call the command at the end

apps=(chrome brave spotify teams slack)
function cpu_app() {
	app=$1
	ps -eo pcpu,command | grep -i $app | awk '{p=$1 ; sum +=p} END {print sum "%"}'
}

function mem_app() {
	app=$1
	ps -eo rss,command | grep -i $app | awk '{m=$1 ; sum +=m} END {print sum/1024 " MB"}'
}

function resource_app(){
	app=$1
	cpu=$(cpu_app $app)
	mem=$(mem_app $app)
	echo "$app|$cpu|$mem"
}

function generate_report() {
	echo "App|CPU|Mem"
        for app in "${apps[@]}"; do
                resource_app "$app"
        done
}

function consume_apps() {
	generate_report	| column -s '|' -t
}

function wca() {
	time=$1
	while true; do clear; consume_apps; sleep $1;  done;
}
