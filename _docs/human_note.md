NOT FOR AI
PASS BY 

Neccessry fot http pushing:

git config --global http.postBuffer 524288000


npm run build && npm run preview


docker compose -f .devcontainer/docker-compose.yml exec -d web npm run dev -- --host 0.0.0.0