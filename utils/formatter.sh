#!/bin/bash
# Text formatting utilities
bold() { echo -e "\033[1m$*\033[0m"; }
red() { echo -e "\033[31m$*\033[0m"; }
green() { echo -e "\033[32m$*\033[0m"; }
yellow() { echo -e "\033[33m$*\033[0m"; }
