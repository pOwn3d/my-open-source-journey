#!/bin/bash
# Simple backup utility
SOURCE="${1:-.}"
DEST="${2:-./backup}"
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "$DEST/backup_$DATE.tar.gz" "$SOURCE"
echo "Backup created: backup_$DATE.tar.gz"
